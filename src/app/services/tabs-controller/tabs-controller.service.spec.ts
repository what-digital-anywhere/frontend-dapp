import { TestBed } from '@angular/core/testing';

import { TabsControllerService } from './tabs-controller.service';

describe('TabsControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabsControllerService = TestBed.get(TabsControllerService);
    expect(service).toBeTruthy();
  });
});
