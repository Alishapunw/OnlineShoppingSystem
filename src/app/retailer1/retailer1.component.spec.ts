import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Retailer1Component } from './retailer1.component';

describe('Retailer1Component', () => {
  let component: Retailer1Component;
  let fixture: ComponentFixture<Retailer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Retailer1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Retailer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
