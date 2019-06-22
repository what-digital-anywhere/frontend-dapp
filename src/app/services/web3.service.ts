import {Injectable} from '@angular/core';
import ABI from '../../../resources/data/transportly-abi';
import Web3 from 'web3/dist/web3.esm.js';


@Injectable({
    providedIn: 'root'
})
export class Web3Service {
    public web3: Web3;
    public contract: any;
    public privateKey = '';
    public accountAddress = '';

    constructor() {

        // TODO: move this to the correct location
        const SC_TICKETNG_ADDRESS = '0x26b4AFb60d6C903165150C6F0AA14F8016bE4aec';
        this.web3 = new Web3('ws://159.100.249.117:8545');
        this.contract = new this.web3.eth.Contract(ABI, SC_TICKETNG_ADDRESS);
        console.log('Contract: ', this.contract);
        // this.createAccount();
    }

    public async createAccount() {
        const privateKey = localStorage.getItem('PRIVATE_KEY');
        const newAccount = await this.web3.eth.accounts.privateKeyToAccount(privateKey);
        // const accounts = await this.web3.eth.getAccounts();
        console.log('Account created: ', newAccount);
        this.web3.eth.defaultAccount = newAccount.address;
        this.accountAddress = newAccount.address;
    }
}
