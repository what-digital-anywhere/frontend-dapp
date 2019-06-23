import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {
  public isJourneyStarted = new BehaviorSubject(localStorage.getItem('JOURNEY_STATE') || true);
  public isCheckedOut = new BehaviorSubject(true);
  constructor() {
    this.isJourneyStarted.subscribe((val: boolean) => localStorage.setItem('JOURNEY_STATE', val.toString()));
  }

}
