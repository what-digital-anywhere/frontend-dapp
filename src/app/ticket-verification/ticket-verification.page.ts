import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../services/web3/web3.service';
import Web3 from 'web3';
import {TicketVerificationService} from '../services/ticket-verification/ticket-verification.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-ticket-verification',
    templateUrl: './ticket-verification.page.html',
})
export class TicketVerificationPage {
    web3: Web3;
    public isScannerEnabled = true;
    public tspPubKey: string = null;

    constructor(
        private router: Router,
        private web3Service: Web3Service,
        private verificationService: TicketVerificationService
    ) {
        this.web3 = web3Service.web3 as Web3;
    }

    async onSuccessfulScanned(signatureObjString: string) {
        this.isScannerEnabled = false;

        const array = signatureObjString.split(',');
        const signature = array[0];
        const message = array[1];

        const passengerPubKey: string = this.web3.eth.accounts.recover(message, signature);
        const passengerData = await this.web3Service.contract.methods
            .passengers(passengerPubKey)
            .call();
        if (passengerData.isCheckedIn === false) {
            alert('that passenger is not checked in');
        }
        this.tspPubKey = passengerData.checkedInTspKey;
        this.verificationService.verificationData.next({
            tspPublicKey: this.tspPubKey,
            timestamp: message,
        });
        this.router.navigate(['/ticket-verified']);
    }

    onFailedScan(result: any) {
        // console.log(result);
    }

    onErrorInScanning(result: Error) {
        console.log(result);

    }
}

