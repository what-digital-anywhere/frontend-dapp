import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketVerifiedPage } from './ticket-verified.page';

describe('TicketVerifiedPage', () => {
  let component: TicketVerifiedPage;
  let fixture: ComponentFixture<TicketVerifiedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketVerifiedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketVerifiedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
