import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEmployeeComponent } from './events-employee.component';

describe('EventsEmployeeComponent', () => {
  let component: EventsEmployeeComponent;
  let fixture: ComponentFixture<EventsEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
