import { Component } from '@angular/core';
import {TabsControllerService} from '../services/tabs-controller/tabs-controller.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private tabController: TabsControllerService) {}

  handleTabWillChange(tab) {
    console.log(tab);
    // this.tabController.tabSubject.next()
  }

}
