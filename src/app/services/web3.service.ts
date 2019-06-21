import { Injectable } from '@angular/core';
import ABI from '../../../resources/data/transportly-abi';
import Web3 from 'web3/dist/web3.esm.js';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  public web3: Web3;
  public contract: any;
  public privateKey = '';
  constructor() {
    this.web3 = new Web3('ws://159.100.249.117:8545');
    this.contract = new this.web3.eth.Contract(ABI);
  }
}
