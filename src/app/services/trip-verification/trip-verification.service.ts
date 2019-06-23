import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


export class CurrentTrip {
    start: Date;
    end: Date;
    transporter: string;
    passenger: string;
    price: number;
    isCheckedOut: boolean;
    isPaid: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class TripService {
    public currentTrip: CurrentTrip = null;
    public tripBeh = new BehaviorSubject(JSON.parse(localStorage.getItem('ACTIVE_TRIP')) || {});
    constructor() {
        this.tripBeh.subscribe(trip => localStorage.setItem('ACTIVE_TRIP', JSON.stringify(trip)));
    }
    getTrip() {
        console.log(JSON.parse(localStorage.getItem('ACTIVE_TRIP')));
        return this.tripBeh.getValue();
    }
}
