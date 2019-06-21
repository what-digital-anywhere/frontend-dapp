import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-trip',
  templateUrl: './past-trip.component.html',
  styleUrls: ['./past-trip.component.scss'],
})
export class PastTripComponent implements OnInit {
tripData = {
  starting_place: 'Paradeplatz',
  destination: 'Langstrasse',
  startedAt: '19.06.2019, 13:21',
  finishedAt: '19.06.2019, 14:02',
  provider: 'SBB',
  price: '5',
  currency: 'CHF',

};
  constructor() { }

  ngOnInit() {}

}
