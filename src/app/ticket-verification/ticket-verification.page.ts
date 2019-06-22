import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../services/web3/web3.service';
import Web3 from 'web3'
import {Router} from '@angular/router'

const l = console.log

@Component({
    selector: 'app-ticket-verification',
    templateUrl: './ticket-verification.page.html',
})
export class TicketVerificationPage implements OnInit {
    web3: Web3

    constructor(private web3Service: Web3Service, private router: Router) {
        this.web3 = web3Service.web3 as Web3
    }

    ngOnInit() {

    }

    generateTicket() {
        let web3: Web3 = this.web3Service.web3 as Web3
        const privateKey = localStorage.getItem('PRIVATE_KEY');
        let txHash = `tx hash 0x5077cb8488a849bc87a5996e730a07d3ddda29949ad6d7a5461ae0e6659876a5`
        let sig_obj = web3.eth.accounts.sign(txHash, privateKey)
        let sigString = JSON.stringify(sig_obj)
        return sigString
    }

    onSuccessfulScanned(signatureObjString: string) {
        let signatureObj: Object = JSON.parse(signatureObjString)
        let publicKey: string = this.web3.eth.accounts.recover(signatureObj)
        publicKey
    }

    onFailedScan(result: any) {
        // console.log(result);
    }

    onErrorInScanning(result: Error) {
        // console.log(result);

    }
}
