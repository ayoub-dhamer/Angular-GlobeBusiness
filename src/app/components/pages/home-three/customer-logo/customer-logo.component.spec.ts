import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLogoComponent } from './customer-logo.component';

describe('CustomerLogoComponent', () => {
  let component: CustomerLogoComponent;
  let fixture: ComponentFixture<CustomerLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
