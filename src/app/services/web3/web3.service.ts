import {Injectable} from '@angular/core';
import ABI from '../../../../resources/data/transportly-abi';
import {Contract} from 'web3-eth-contract';
import Web3 from 'web3';


@Injectable({
    providedIn: 'root'
})
export class Web3Service {
    public web3: Web3;
    public contract: any;
    public contractView: any;
    public privateKey = '';
    public accountAddress = '';

    constructor() {

        // TODO: move this to the correct location
        const SC_TICKETNG_ADDRESS = '0x49455287eBCC42a875B40724C62519D03e2EDcff';
        if (window.location.host === 'anywhere.what.digital') {
            this.web3 = new Web3('wss://eth-testnode.what.digital');
        } else {
            this.web3 = new Web3('ws://159.100.249.117:8545');
        }

        this.contract = new this.web3.eth.Contract(ABI as any, SC_TICKETNG_ADDRESS);

        console.log('Contract: ', this.contract);
        // this.createAccount();
    }

    public async createAccount() {
        const privateKey = localStorage.getItem('PRIVATE_KEY');

        if (!privateKey) {
            return Promise.resolve(false);
        }
        const newAccount = await this.web3.eth.accounts.privateKeyToAccount(privateKey);
        // const accounts = await this.web3.eth.getAccounts();
        console.log('Account created: ', newAccount);
        this.web3.eth.accounts.wallet.add(newAccount);
        this.web3.eth.defaultAccount = newAccount.address;
        this.accountAddress = newAccount.address;
    }
}
