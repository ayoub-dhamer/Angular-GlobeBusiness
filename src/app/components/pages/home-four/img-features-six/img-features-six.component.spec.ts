import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgFeaturesSixComponent } from './img-features-six.component';

describe('ImgFeaturesSixComponent', () => {
  let component: ImgFeaturesSixComponent;
  let fixture: ComponentFixture<ImgFeaturesSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgFeaturesSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgFeaturesSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
