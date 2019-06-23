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

    public journeys = [];

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
        this.filterTripsByJourney(result);
        event.target.complete();
    }

    async ionViewDidEnter() {
        const result = await this.web3Service.contract.methods.getTrips(
            this.web3Service.accountAddress,
        ).call({
            from: this.web3Service.accountAddress,
        });
        this.filterTripsByJourney(result);
        // this.createTripsObject(result);resultś
    }

    async onCheckotOut() {
        const result = await this.web3Service.contract.methods.getTrips(
            this.web3Service.accountAddress,
        ).call({
            from: this.web3Service.accountAddress,
        });
        this.filterTripsByJourney(result);
    }

    filterTripsByJourney(results) {
        const journeys = {};
        results.forEach((trip, idx) => {
            trip = this.createTrip(trip, idx);
            if (journeys[trip.journeyId] === undefined) {
                journeys[trip.journeyId] = {
                    pastTrips: [],
                    currentTrip: null,
                    paymentData: {
                        isPaid: true,
                        price: 1,
                    }
                };
            }

            if (!trip.isCheckedOut) {
                this.currentTripService.tripBeh.next(trip);
                journeys[trip.journeyId].currentTrip = trip;
                return;
            }
            // consol
            if (!trip.isPaid) { // check whether at least one is not paid
                console.log(trip.isPaid);
                journeys[trip.journeyId].paymentData.isPaid = trip.isPaid;
            }

            if (trip.price <= 0) { // check whether at least one has wrong price
                console.log(trip.price);
                journeys[trip.journeyId].paymentData.price = trip.price;
            }

            journeys[trip.journeyId].pastTrips.push(trip);
        });
        const arrJourneys = Object.values(journeys);

        this.journeys = arrJourneys.map((journey: any) => ({
            pastTrips: journey.pastTrips.reverse(),
            currentTrip: journey.currentTrip,
            paymentData: journey.paymentData // payment data are meant to be summed payment information about the journey
            // such as whether entire journey is already paid and whether any of the prices is equal to zero or below
            // this requires looping from the trips, it is done during creation of a journey in this component
        })).reverse();
    }

    private createTrip(trip, idx) {
        return {
            idx,
            journeyId: trip.journeyId,
            start: new Date(Number(trip.startTimestamp) * 1000),
            end: new Date(Number(trip.endTimestamp) * 1000),
            transporter: trip.transporter,
            passenger: trip.passenger,
            price: Web3.utils.fromWei(trip.price, 'ether'),
            isCheckedOut: trip.isCheckedOut,
            isPaid: trip.isPaid,
        };
    }

    async startPayment(trip, nonce) {
        if (trip.isPaid) {
            return Promise.resolve();
        }
        const from = this.web3Service.accountAddress;
        const value = Web3.utils.toWei(trip.price, 'ether');
        const gasPrice = await this.web3Service.contract.methods.payForTrip(trip.idx).estimateGas({
            from,
        });

        return this.web3Service.contract.methods.payForTrip(trip.idx).send({
            from,
            gasPrice,
            nonce,
            value,
            gas: 5000000
        });
    }

    async pay({pastTrips}) {
        const from = this.web3Service.accountAddress;
        const nonce = await this.web3Service.web3.eth.getTransactionCount(from, 'pending');
        let idxForNoncePatching = -1;
        pastTrips.forEach((pastTrip, idx) => {
            if (!pastTrip.isPaid && pastTrip.price > 0) {
                idxForNoncePatching++;
            }
            this.startPayment(pastTrip, nonce + idxForNoncePatching)
        });
    }
}
