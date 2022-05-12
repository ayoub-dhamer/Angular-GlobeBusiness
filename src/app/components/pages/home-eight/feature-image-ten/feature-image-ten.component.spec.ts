import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureImageTenComponent } from './feature-image-ten.component';

describe('FeatureImageTenComponent', () => {
  let component: FeatureImageTenComponent;
  let fixture: ComponentFixture<FeatureImageTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureImageTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureImageTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
