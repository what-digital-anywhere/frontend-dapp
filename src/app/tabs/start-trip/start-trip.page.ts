import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../services/web3.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-start-trip',
    templateUrl: './start-trip.page.html',
    styleUrls: ['./start-trip.page.scss'],
})
export class StartTripPage implements OnInit {

    public transporterPubKey = '';

    constructor(
        private web3Service: Web3Service,
        private router: Router,
    ) {
    }

    ngOnInit() {
    }

    updateKey(ev: any) {
        this.transporterPubKey = ev.detail.value;
    }

    submit() {
        // check in via web3!
        const result = this.web3Service.contract.methods.checkIn(
            this.transporterPubKey,
        ).send({
            from: this.web3Service.accountAddress,
            gas: 3000000,
        });
        console.log('checked in!', result);
        // TODO: toast a success message
        this.router.navigate(['/tabs/trips']);
    }


    onErrorInScanning($event: Error) {

    }

    onSuccessfulScanned($event: string) {
    }

    onFailedScan($event: Error) {

    }
}
