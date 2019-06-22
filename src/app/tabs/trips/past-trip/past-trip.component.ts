import {Component, Input, OnInit} from '@angular/core';
import {Web3Service} from '../../../services/web3/web3.service';

interface IPastTripData {
    end: string;
    idx: number;
    price: number;
    start: string;
    isPaid: boolean;
    tripData: string;
    transporter: string;
}

@Component({
    selector: 'app-past-trip',
    templateUrl: './past-trip.component.html',
    styleUrls: ['./past-trip.component.scss'],
})
export class PastTripComponent implements OnInit {
    @Input() tripData: IPastTripData = {} as any;

    constructor(private web3Service: Web3Service) {
    }

    ngOnInit() {
    }

    async startPayment(trip: IPastTripData) {
        const from = this.web3Service.accountAddress;
        const value = trip.price;
        const gasPrice = await this.web3Service.contract.methods.payForTrip(trip.idx).estimateGas({
            from,
        });

        const txResult = await this.web3Service.contract.methods.payForTrip(trip.idx).send({
            from,
            gasPrice,
            value,
            gas: 5000000
        });
        console.log(txResult);
    }

}
