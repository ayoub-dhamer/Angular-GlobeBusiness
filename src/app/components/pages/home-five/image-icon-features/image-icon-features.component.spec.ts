import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageIconFeaturesComponent } from './image-icon-features.component';

describe('ImageIconFeaturesComponent', () => {
  let component: ImageIconFeaturesComponent;
  let fixture: ComponentFixture<ImageIconFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageIconFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageIconFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
