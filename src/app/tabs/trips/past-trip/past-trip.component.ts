import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-past-trip',
  templateUrl: './past-trip.component.html',
  styleUrls: ['./past-trip.component.scss'],
})
export class PastTripComponent implements OnInit {
 @Input() tripData: any = {};
  constructor() { }

  ngOnInit() {}

}
