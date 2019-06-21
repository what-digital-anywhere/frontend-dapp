import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
})
export class TripComponent implements OnInit {
  @Input() tripData = {
    place: 'Paradeplatz',
    timedata: '19.06.2019, 13:21',
    provider: 'SBB'
  };
  constructor() { }

  ngOnInit() {}

}
