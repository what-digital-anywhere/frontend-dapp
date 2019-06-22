import { Component, OnInit } from '@angular/core';
import {TicketVerificationService} from '../services/ticket-verification/ticket-verification.service';

@Component({
  selector: 'app-ticket-verified',
  templateUrl: './ticket-verified.page.html',
  styleUrls: ['./ticket-verified.page.scss'],
})
export class TicketVerifiedPage implements OnInit {

  constructor(public verificationService: TicketVerificationService) { }

  ngOnInit() {
  }

  createDate(timestamp) {
    return new Date(timestamp * 1000);
  }

}
