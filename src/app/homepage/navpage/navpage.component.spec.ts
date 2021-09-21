import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavpageComponent } from './navpage.component';

describe('NavpageComponent', () => {
  let component: NavpageComponent;
  let fixture: ComponentFixture<NavpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
