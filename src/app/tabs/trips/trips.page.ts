import {Component} from '@angular/core';
import Web3 from 'web3';
import {Web3Service} from '../../services/web3/web3.service';
import {CurrentTrip, TripService} from 'app/services/trip-verification/trip-verification.service';

@Component({
    selector: 'app-trips',
    templateUrl: './trips.page.html',
    styleUrls: ['./trips.page.scss'],
})
export class TripsPage {

    public pastTrips = [];

    constructor(
        private web3Service: Web3Service,
        public currentTripService: TripService,
    ) {
    }

    async doRefresh(event) {
        const result = await this.web3Service.contract.methods.getTrips(
            this.web3Service.accountAddress,
        ).call({
            from: this.web3Service.accountAddress,
        });
        console.log(result)
        this.createTripsObject(result);
        event.target.complete()
    }

    async ionViewDidEnter() {
        const result = await this.web3Service.contract.methods.getTrips(
            this.web3Service.accountAddress,
        ).call({
            from: this.web3Service.accountAddress,
        });

        this.createTripsObject(result);
    }

    onCheckotOut() {
        this.currentTripService.currentTrip.isCheckedOut = true;
        this.pastTrips.unshift(this.currentTripService.currentTrip);
        this.currentTripService.currentTrip = null;
    }

    public createTripsObject(result) {
        const pastTrips = result.map((trip, idx) => {
            return {
                idx,
                start: new Date(Number(trip.startTimestamp) * 1000),
                end: new Date(Number(trip.endTimestamp) * 1000),
                transporter: trip.transporter,
                passenger: trip.passenger,
                price: Web3.utils.fromWei(trip.price, 'ether'),
                isCheckedOut: trip.isCheckedOut,
                isPaid: trip.isPaid,
            };
        }).filter(trip => trip.isCheckedOut);
        console.log('Past Trips:', pastTrips);

        this.pastTrips = pastTrips.reverse();

        for (const trip of result) {
            const isCheckedIn = !trip.isCheckedOut;
            if (isCheckedIn) {
                const currentTrip = {
                    start: new Date(Number(trip.startTimestamp) * 1000),
                    end: new Date(Number(trip.endTimestamp) * 1000),
                    transporter: trip.transporter,
                    passenger: trip.passenger,
                    price: trip.price,
                    isCheckedOut: trip.isCheckedOut,
                    isPaid: trip.isPaid
                };
                console.log('currentTrip:', currentTrip);
                this.currentTripService.currentTrip = currentTrip as any as CurrentTrip;
                return;
            }
        }
    }
}
