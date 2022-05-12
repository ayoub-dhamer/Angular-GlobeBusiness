import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AddEventComponent } from '../add-event/add-event.component';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventsService } from '../shared/events.service';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-event-infos',
  templateUrl: './event-infos.component.html',
  styleUrls: ['./event-infos.component.css'],
})
export class EventInfosComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private eventsService: EventsService
  ) {}

  id: any;
  event: any;
  events: any;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

    this.eventsService
      .getEvents(
        Number(localStorage.getItem('companyId')),
        Number(localStorage.getItem('employeeId'))
      )
      .subscribe({
        next: (res) => {
          this.events = res;
        },
        error: () => {
          alert('error while getting the evnets');
        },
      });
  }
}
