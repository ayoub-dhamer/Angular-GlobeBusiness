import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCalendarInfosComponent } from './event-calendar-infos.component';

describe('EventCalendarInfosComponent', () => {
  let component: EventCalendarInfosComponent;
  let fixture: ComponentFixture<EventCalendarInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCalendarInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCalendarInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
