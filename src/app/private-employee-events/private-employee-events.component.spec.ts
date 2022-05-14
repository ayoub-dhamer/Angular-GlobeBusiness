import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateEmployeeEventsComponent } from './private-employee-events.component';

describe('PrivateEmployeeEventsComponent', () => {
  let component: PrivateEmployeeEventsComponent;
  let fixture: ComponentFixture<PrivateEmployeeEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateEmployeeEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateEmployeeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
