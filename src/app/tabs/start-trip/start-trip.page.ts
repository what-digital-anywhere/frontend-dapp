import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-trip',
  templateUrl: './start-trip.page.html',
  styleUrls: ['./start-trip.page.scss'],
})
export class StartTripPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    onErrorInScanning($event: Error) {

    }

  onSuccessfulScanned($event: string) {}

  onFailedScan($event: Error) {

  }
}
