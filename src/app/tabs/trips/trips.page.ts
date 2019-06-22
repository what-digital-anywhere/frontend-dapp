import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../services/web3.service';
import {PRIVATE_KEY} from '../../app.constants';

@Component({
    selector: 'app-trips',
    templateUrl: './trips.page.html',
    styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {
    public trips = [];

    constructor(private web3Service: Web3Service) {
    }

    ngOnInit() {
        const privateKey = localStorage.getItem('PRIVATE_KEY');
        console.log('privateKey:', privateKey);

        this.web3Service.web3.eth.personal.newAccount(privateKey, () => {
            this.web3Service.web3.eth.getAccounts().then((accounts) => {
                const account = accounts[0];
                this.web3Service.web3.eth.defaultAccount = account;
                this.web3Service.contract.methods.getTrips(
                    account,
                ).call({
                    from: account,
                }).then((result) => {
                    this.trips = result;
                    // do something with the list of trips
                    console.log(result);
                });
            });
        });
    }
}
