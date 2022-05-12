import { Component, OnInit } from '@angular/core';

import { EventsService } from '../shared/events.service';
import { Event } from '../class/event';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventCalendarInfosComponent } from '../event-calendar-infos/event-calendar-infos.component';

import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-events-calendar',
  templateUrl: './events-calendar.component.html',
  styleUrls: ['./events-calendar.component.css'],
})
export class EventsCalendarComponent implements OnInit {
  public events: any[];
  public options: any;
  eventList: Event[];
  infos: any;

  constructor(
    private eventsService: EventsService,
    public snackBar: MatSnackBar,
    private toast: NgToastService
  ) {}

  openSnackBar(arg: any) {
    this.eventList.forEach((element) => {
      if (element.eventId == arg.event.id) {
        this.infos = element;
      }
    });
    //arg.event._def.title
    this.snackBar.openFromComponent(EventCalendarInfosComponent, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000,
      data: this.infos,
      panelClass: ['success-snackbar'],
    });
  }

  ngOnInit(): void {
    this.getAllEvents();

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: new Date(),
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      editable: false,
      eventMouseEnter: this.openSnackBar.bind(this),
      timeFormat: 'HH:mm',
      displayEventEnd: true,
      weekends: false,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
    };
  }

  getAllEvents() {
    this.eventsService
      .getEvents(
        Number(localStorage.getItem('companyId')),
        Number(localStorage.getItem('employeeId'))
      )
      .subscribe({
        next: (res) => {
          this.eventList = res;
          this.events = [
            {
              id: 0,
              title: 'test',
              color: 'red',
            },
          ];
          res.forEach((element) => {
            if (element.type == 'private') {
              this.events.push({
                id: element.eventId,
                overlap: false,
                display: 'block',
                title: element.title,
                date: element.startDate,
                borderColor: '#00A4CCFF',
                backgroundColor: 'red',
              });
            } else {
              this.events.push({
                id: element.eventId,
                overlap: false,
                display: 'block',
                title: element.title,
                date: element.startDate,
                borderColor: '#00A4CCFF',
                backgroundColor:
                  ';background: linear-gradient( 111.6deg,  rgba(73,235,221,1) -0%, rgba(83,222,219,1) 7.1%, rgba(105,191,217,1) 13.4%, rgba(127,157,214,1) 18%, rgba(155,113,208,1) 23.9%, rgba(178,73,201,1) 28.8%, rgba(200,45,192,1) 33.3%, rgba(213,42,180,1) 38%, rgba(232,44,145,1) 44.2%, rgba(239,45,128,1) 52.4%, rgba(249,66,107,1) 59.7%, rgba(252,105,98,1) 67.3%, rgba(252,105,98,1) 74.4%, rgba(254,145,92,1) 82.2%, rgba(255,189,86,1) 88.2%, rgba(254,227,80,1) 92.8%, rgba(254,248,75,1) 98.4% );',
              });
            }
          });
        },
        error: () => {
          this.toast.error({
            detail: 'ERROR',
            summary: 'error while getting the events data',
            sticky: true,
          });
        },
      });
  }
}
