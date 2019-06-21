import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-current-trip',
  templateUrl: './current-trip.component.html',
  styleUrls: ['./current-trip.component.scss'],
})
export class CurrentTripComponent implements OnInit {
  @Input() tripData = {
    starting_place: 'Paradeplatz',
    startedAt: '19.06.2019, 13:21',
    provider: 'SBB'
  };

  constructor() { }

  ngOnInit() {}

}
