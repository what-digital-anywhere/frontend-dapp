import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../services/web3/web3.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
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
    ) {
    }
    ionViewWillLeave() {
        console.log("??? leave ???")
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


    async submit() {
        this.web3Service.contract.methods.checkIn(
            this.transporterPubKey,
        ).send({
            from: this.web3Service.accountAddress,
            gas: 3000000,
        }, () => this.onScan.next());
    }


    onErrorInScanning($event: Error) {

    }

    async onSuccessfulScanned(address: string) {
        this.web3Service.contract.methods.checkIn(
            address,
        ).send({
            from: this.web3Service.accountAddress,
            gas: 3000000,
        }, () => this.onScan.next());
    }


    onFailedScan($event: Error) {
    }
}
