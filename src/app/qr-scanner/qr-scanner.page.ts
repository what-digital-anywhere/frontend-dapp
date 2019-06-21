import { Component, OnInit } from '@angular/core';
import {Web3Service} from '../services/web3.service';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.page.html',
  styleUrls: ['./qr-scanner.page.scss'],
})
export class QrScannerPage implements OnInit {

  constructor(private web3Service: Web3Service) { }

  ngOnInit() {
  }

  onSuccessfulScanned(result) {
    localStorage.setItem(PRIVATE_KEY, result);
    this.web3Service.privateKey = result;
  }

  onFailedScan(result: any) {
    // console.log(result);
  }

  onErrorInScanning(result: Error) {
    // console.log(result);

  }
}
