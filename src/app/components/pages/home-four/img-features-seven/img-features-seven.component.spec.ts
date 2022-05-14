import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgFeaturesSevenComponent } from './img-features-seven.component';

describe('ImgFeaturesSevenComponent', () => {
  let component: ImgFeaturesSevenComponent;
  let fixture: ComponentFixture<ImgFeaturesSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgFeaturesSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgFeaturesSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
