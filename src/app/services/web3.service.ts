import { Injectable } from '@angular/core';
import Web3 from 'web3/dist/web3.esm.js';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  public web3: Web3;
  constructor() {
    this.web3 = new Web3('ws://159.100.249.117:8545');
  }
}
