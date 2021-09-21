import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRetailerViewComponent } from './admin-retailer-view.component';

describe('AdminRetailerViewComponent', () => {
  let component: AdminRetailerViewComponent;
  let fixture: ComponentFixture<AdminRetailerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRetailerViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRetailerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
