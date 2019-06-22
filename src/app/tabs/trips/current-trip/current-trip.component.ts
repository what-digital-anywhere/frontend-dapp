import {Component, Input, OnInit} from '@angular/core';
import {Web3Service} from '../../../services/web3.service';

@Component({
    selector: 'app-current-trip',
    templateUrl: './current-trip.component.html',
    styleUrls: ['./current-trip.component.scss'],
})
export class CurrentTripComponent implements OnInit {
    @Input() tripData = {};

    constructor(private web3Service: Web3Service) {
    }

    ngOnInit() {
    }

    public checkOut() {
        const result = this.web3Service.contract.methods.checkOut().call({
            from: this.web3Service.accountAddress,
        });
        // TODO: toast a success message and trigger a re-fetch of the trips
    }

}
