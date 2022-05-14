import { Component, OnInit, Inject } from '@angular/core';

import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
  selector: 'app-event-calendar-infos',
  templateUrl: './event-calendar-infos.component.html',
  styleUrls: ['./event-calendar-infos.component.css']
})
export class EventCalendarInfosComponent implements OnInit {

  event: any;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) { }

  ngOnInit(): void {
    this.event = this.data;
  }

}
