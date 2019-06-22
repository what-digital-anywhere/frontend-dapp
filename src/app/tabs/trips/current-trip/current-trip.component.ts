import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-current-trip',
    templateUrl: './current-trip.component.html',
    styleUrls: ['./current-trip.component.scss'],
})
export class CurrentTripComponent implements OnInit {
    @Input() tripData = {};

    constructor() {
    }

    ngOnInit() {
    }

    public checkOut() {

    }

}
