import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoFourComponent } from './promo-four.component';

describe('PromoFourComponent', () => {
  let component: PromoFourComponent;
  let fixture: ComponentFixture<PromoFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
