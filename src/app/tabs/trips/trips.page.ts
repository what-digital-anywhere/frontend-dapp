import { Component, OnInit } from '@angular/core';
import {Web3Service} from '../../services/web3.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

  constructor(private web3: Web3Service) { }

  ngOnInit() {
  }

}
