import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../services/web3/web3.service';
import {PRIVATE_KEY} from '../../app.constants';
import {CurrentTrip, TripService} from '../../services/trip-verification/trip-verification.service'

@Component({
    selector: 'app-trips',
    templateUrl: './trips.page.html',
    styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

    public pastTrips = [];

    constructor(
        private web3Service: Web3Service,
        private currentTripService: TripService,
    ) {
    }

    async ngOnInit() {
        const privateKey = localStorage.getItem('PRIVATE_KEY');
        console.log('privateKey:', privateKey, this.web3Service.accountAddress);

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
            if (!trip.isCheckedOut) {
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
                this.currentTripService.currentTrip = currentTrip as any as CurrentTrip
                return;
            }
        }
    }
}
