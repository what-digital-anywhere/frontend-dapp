import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabsControllerService {
  public tabSubject = new BehaviorSubject('');
  constructor() { }
}
