import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../services/web3.service';
import {PRIVATE_KEY} from '../../app.constants';

@Component({
    selector: 'app-trips',
    templateUrl: './trips.page.html',
    styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

    public pastTrips = [];
    public currentTrip;

    constructor(private web3Service: Web3Service) {
    }

    ngOnInit() {
        const privateKey = localStorage.getItem('PRIVATE_KEY');
        console.log('privateKey:', privateKey);

        this.web3Service.web3.eth.personal.newAccount(privateKey, async () => {
            const accounts = await this.web3Service.web3.eth.getAccounts();
            const account = accounts[0];
            this.web3Service.web3.eth.defaultAccount = account;
            const result = await this.web3Service.contract.methods.getTrips(
                account,
            ).call({
                from: account,
            });

            this.createTripsObject(result);

        });
    }

    public createTripsObject(result) {
        const pastTrips = result.map((trip) => {
            return {
                start: new Date(trip.startTimestamp.toNumber() * 1000),
                end: new Date(trip.endTimestamp.toNumber() * 1000),
                transporter: trip.transporter,
                passenger: trip.passenger,
                price: trip.price,
                isCheckedOut: trip.isCheckedOut,
                isPaid: trip.isPaid
            };
        }).filter(trip => trip.isCheckedOut);
        console.log('Past Trips:', pastTrips);

        this.pastTrips = pastTrips;

        for (const trip of result) {
            if (trip.isCheckedOut) {
                const currentTrip = {
                    start: new Date(trip.startTimestamp.toNumber() * 1000),
                    end: new Date(trip.endTimestamp.toNumber() * 1000),
                    transporter: trip.transporter,
                    passenger: trip.passenger,
                    price: trip.price,
                    isCheckedOut: trip.isCheckedOut,
                    isPaid: trip.isPaid
                };
                console.log('currentTrip:', currentTrip);
                this.currentTrip = currentTrip;
                return;
            }
        }
    }

}
