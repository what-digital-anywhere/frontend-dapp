import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.page.html',
  styleUrls: ['./qr-scanner.page.scss'],
})
export class QrScannerPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSuccessfulScanned(result) {
    console.log(result);
  }

  onFailedScan(result: any) {
    // console.log(result);
  }

  onErrorInScanning(result: Error) {
    // console.log(result);

  }
}
