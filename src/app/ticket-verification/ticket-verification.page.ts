import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../services/web3/web3.service';
import Web3 from 'web3';


@Component({
    selector: 'app-ticket-verification',
    templateUrl: './ticket-verification.page.html',
})
export class TicketVerificationPage {
    web3: Web3;
    public isScannerEnabled = true;
    public tspPubKey: string = null;

    constructor(
        private web3Service: Web3Service,
    ) {
        this.web3 = web3Service.web3 as Web3
    }

    async onSuccessfulScanned(signatureObjString: string) {
        this.isScannerEnabled = false;
        
        console.log('scanned');
        let array = signatureObjString.split(',');
        let signature = array[0];
        let message = array[1];
        console.log(message);
        console.log(signature);

        let passengerPubKey: string = this.web3.eth.accounts.recover(message, signature);
        console.log(passengerPubKey);
        let passengerData = await this.web3Service.contract.methods
            .passengers(passengerPubKey)
            .call();
        if (passengerData.isCheckedIn === false) {
            alert('that passenger is not checked in');
        }
        this.tspPubKey = passengerData.checkedInTspKey;
    }

    onFailedScan(result: any) {
        // console.log(result);
    }

    onErrorInScanning(result: Error) {
        console.log(result);

    }
}

