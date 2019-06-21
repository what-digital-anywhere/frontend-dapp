import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTripComponent } from './past-trip.component';

describe('PastTripComponent', () => {
  let component: PastTripComponent;
  let fixture: ComponentFixture<PastTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastTripComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
