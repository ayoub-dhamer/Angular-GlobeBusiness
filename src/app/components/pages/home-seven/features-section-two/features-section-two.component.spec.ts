import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesSectionTwoComponent } from './features-section-two.component';

describe('FeaturesSectionTwoComponent', () => {
  let component: FeaturesSectionTwoComponent;
  let fixture: ComponentFixture<FeaturesSectionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesSectionTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesSectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
