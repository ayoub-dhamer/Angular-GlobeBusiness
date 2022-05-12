import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesSectionOneComponent } from './features-section-one.component';

describe('FeaturesSectionOneComponent', () => {
  let component: FeaturesSectionOneComponent;
  let fixture: ComponentFixture<FeaturesSectionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesSectionOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesSectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
