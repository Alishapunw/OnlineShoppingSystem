import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRetailerAddComponent } from './admin-retailer-add.component';

describe('AdminRetailerAddComponent', () => {
  let component: AdminRetailerAddComponent;
  let fixture: ComponentFixture<AdminRetailerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRetailerAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRetailerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
