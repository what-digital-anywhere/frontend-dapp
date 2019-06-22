import {Component, OnInit} from '@angular/core';
import {Web3Service} from 'app/services/web3/web3.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {TripService} from 'app/services/trip-verification/trip-verification.service'

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
        private web3Service: Web3Service,
        private router: Router,
        private tripService: TripService,
    ) {
    }

    ngOnInit() {
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

    onFailedScan($event: Error) {}
}
