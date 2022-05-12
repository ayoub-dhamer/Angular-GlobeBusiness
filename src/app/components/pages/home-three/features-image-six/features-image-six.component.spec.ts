import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesImageSixComponent } from './features-image-six.component';

describe('FeaturesImageSixComponent', () => {
  let component: FeaturesImageSixComponent;
  let fixture: ComponentFixture<FeaturesImageSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesImageSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesImageSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
