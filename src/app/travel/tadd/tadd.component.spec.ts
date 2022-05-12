import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaddComponent } from './tadd.component';

describe('TaddComponent', () => {
  let component: TaddComponent;
  let fixture: ComponentFixture<TaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
