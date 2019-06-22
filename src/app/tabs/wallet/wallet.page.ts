import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../services/web3/web3.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-wallet',
    templateUrl: './wallet.page.html',
    styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
    balance: any;
    walletAddress: any = '';

    constructor(
        private web3Service: Web3Service,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.walletAddress = this.web3Service.accountAddress;
        this.web3Service.web3.eth.getBalance(this.web3Service.accountAddress).then((balance) => {
            this.balance = Math.round(parseFloat(balance) / 10000000000000000) / 100;
        });
    }

    public logOut() {
        localStorage.removeItem('PRIVATE_KEY');
        console.log('Removing private key...');
        this.router.navigate(['connect']);
    }
}
