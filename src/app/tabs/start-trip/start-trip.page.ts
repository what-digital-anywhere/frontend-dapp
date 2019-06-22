import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../services/web3.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

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
    ) {
    }

    ngOnInit() {
        this.onScan.subscribe(() => {
        this.isScannerEnabled = false;
            this.router.navigate(['/tabs/trips']);
        });
    }

    updateKey(ev: any) {
        this.transporterPubKey = ev.detail.value;
    }


    async submit() {
        // check in via web3!
        this.web3Service.contract.methods.checkIn(
            this.transporterPubKey,
        ).send({
            from: this.web3Service.accountAddress,
            gas: 3000000,
        }, () => this.onScan.next())
        // this.isScannerEnabled = false;
        // this.presentToastWithOptions();
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


    onFailedScan($event: Error) {}
}
