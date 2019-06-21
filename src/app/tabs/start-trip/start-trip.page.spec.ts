import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartTripPage } from './start-trip.page';

describe('StartTripPage', () => {
  let component: StartTripPage;
  let fixture: ComponentFixture<StartTripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartTripPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartTripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
