import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../services/web3/web3.service';
import {Router} from '@angular/router'
import Web3 from 'web3';


@Component({
    selector: 'app-ticket-verification',
    templateUrl: './ticket-verification.page.html',
})
export class TicketVerificationPage implements OnInit {
    web3: Web3;

    constructor(
        private web3Service: Web3Service,
    ) {
        this.web3 = web3Service.web3 as Web3
    }

    ngOnInit() {

    }

    async onSuccessfulScanned(signatureObjString: string) {
        let signatureObj = JSON.parse(signatureObjString);
        let passengerPubKey: string = this.web3.eth.accounts.recover(signatureObj);
        (this.web3 as any).contract.passengers.call(
            passengerPubKey,
            (error, result) => {
                console.log('res');
                console.log(result);
                console.log(error);
            },
        )
    }

    onFailedScan(result: any) {
        // console.log(result);
    }

    onErrorInScanning(result: Error) {
        // console.log(result);

    }
}

