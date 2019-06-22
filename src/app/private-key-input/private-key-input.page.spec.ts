import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateKeyInputPage } from './private-key-input.page';

describe('PrivateKeyInputPage', () => {
  let component: PrivateKeyInputPage;
  let fixture: ComponentFixture<PrivateKeyInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateKeyInputPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateKeyInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
