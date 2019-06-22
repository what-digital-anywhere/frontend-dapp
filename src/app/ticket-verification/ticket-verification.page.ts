import { Component, OnInit } from '@angular/core';
import {Web3Service} from '../services/web3/web3.service';
import {PRIVATE_KEY} from '../app.constants'

@Component({
  selector: 'app-ticket-verification',
  templateUrl: './ticket-verification.page.html',
})
export class TicketVerificationPage implements OnInit {

  constructor(private web3Service: Web3Service) { }

  ngOnInit() {
  }

  onSuccessfulScanned(result) {

  }

  onFailedScan(result: any) {
    // console.log(result);
  }

  onErrorInScanning(result: Error) {
    // console.log(result);

  }
}
