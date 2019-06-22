import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../services/web3/web3.service';
import {Router} from '@angular/router';
import {PRIVATE_KEY} from '../app.constants';

@Component({
    selector: 'app-qr-scanner',
    templateUrl: './qr-scanner.page.html',
    styleUrls: ['./qr-scanner.page.scss'],
})
export class QrScannerPage implements OnInit {

    constructor(private web3Service: Web3Service, private router: Router) {
    }

    ngOnInit() {
    }

    onSuccessfulScanned(result) {
        if (!result.startsWith('0x')) {
            result = '0x' + result;
        }

        localStorage.setItem('PRIVATE_KEY', result);

        this.web3Service.privateKey = result;
        this.router.navigate(['/tabs/trips']);
    }

    onFailedScan(result: any) {
        // console.log(result);
    }

    onErrorInScanning(result: Error) {
        // console.log(result);

    }
}
