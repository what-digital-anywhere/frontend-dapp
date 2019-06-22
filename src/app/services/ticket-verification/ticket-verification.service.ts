import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketVerificationService {
  public verificationData = new BehaviorSubject(null);
  constructor() { }
}
