import {Component, OnInit} from '@angular/core';
import {Web3Service} from 'app/services/web3/web3.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {TripService} from 'app/services/trip-verification/trip-verification.service'
import {TabsControllerService} from '../../services/tabs-controller/tabs-controller.service';

@Component({
    selector: 'app-start-trip',
    templateUrl: './start-trip.page.html',
    styleUrls: ['./start-trip.page.scss'],
})
export class StartTripPage implements OnInit {
    public isScannerEnabled = true;

    public transporterPubKey = '';
    public onScan = new Subject();

    constructor(
        private tabsController: TabsControllerService,
        private web3Service: Web3Service,
        private router: Router,
        private tripService: TripService,
    ) {
    }

    ionViewWillEnter() {
        this.isScannerEnabled = true;
    }

    ionViewWillLeave() {
        console.log('will leave');
        this.isScannerEnabled = false;
    }


    ngOnInit() {
        this.tabsController.tabSubject.subscribe(async name => {
            console.log(name);
            this.isScannerEnabled = (name === 'start-trip');
        });
        this.onScan.subscribe(() => {
            this.isScannerEnabled = false;
            this.router.navigate(['/tabs/trips']);
        });
    }

    updateKey(ev: any) {
        console.log(ev.detail, ev.detail.value.length);
        this.transporterPubKey = ev.detail.value;
    }

    onErrorInScanning($event: Error) {

    }

    async checkIn(address?: string) {
        this.transporterPubKey = address || this.transporterPubKey;
        this.web3Service.contract.methods.checkIn(this.transporterPubKey)
            .send(
                {
                    from: this.web3Service.accountAddress,
                    gas: 3000000,
                },
                () => this.onScan.next(),
            )
            .on('receipt', (receipt) => {
                this.tripService.currentTrip.checkInHash = receipt.transactionHash
            })
    }

    onFailedScan($event: Error) {
    }
}
