import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerSideNavComponent } from './retailer-side-nav.component';

describe('RetailerSideNavComponent', () => {
  let component: RetailerSideNavComponent;
  let fixture: ComponentFixture<RetailerSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerSideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
