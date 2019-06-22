import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabsControllerService {
  public tabSubject = new Subject();
  constructor() { }
}
