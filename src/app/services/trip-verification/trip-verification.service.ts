import {Injectable} from '@angular/core';


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
}
