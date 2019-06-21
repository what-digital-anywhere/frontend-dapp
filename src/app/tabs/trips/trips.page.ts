import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../services/web3.service';
import {PRIVATE_KEY} from '../../app.constants';

@Component({
    selector: 'app-trips',
    templateUrl: './trips.page.html',
    styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

    constructor(private web3: Web3Service) {
    }

    ngOnInit() {
        const privateKey = localStorage.getItem(PRIVATE_KEY);

        this.web3.eth.personal.newAccount(privateKey, () => {
            this.web3.eth.getAccounts().then((accounts) => {
                const account = accounts[0];
                this.web3.eth.defaultAccount = account;
                const allTrips = this.web3.contract.methods.getTrips(
                    account,
                ).call({
                    from: account,
                }).then((result) => {
                    // do something with the list of trips
                    console.log(result);
                });
            });
        });
    }
}
