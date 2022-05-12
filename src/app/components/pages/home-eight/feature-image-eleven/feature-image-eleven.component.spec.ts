import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureImageElevenComponent } from './feature-image-eleven.component';

describe('FeatureImageElevenComponent', () => {
  let component: FeatureImageElevenComponent;
  let fixture: ComponentFixture<FeatureImageElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureImageElevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureImageElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
