import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoEightComponent } from './promo-eight.component';

describe('PromoEightComponent', () => {
  let component: PromoEightComponent;
  let fixture: ComponentFixture<PromoEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
