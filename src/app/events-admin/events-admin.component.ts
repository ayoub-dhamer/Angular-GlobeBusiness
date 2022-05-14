import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import {
  trigger,
  transition,
  group,
  query,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-events-admin',
  templateUrl: './events-admin.component.html',
  styleUrls: ['./events-admin.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition('1 => 2, 2 => 3, 2 => 5, 2 => 6 , 5 => 6, 6 => 7', [
        style({ height: '!' }),
        query(
          ':enter',
          style({
            transform: 'translateX(100%)',
          })
        ),
        query(
          ':enter, :leave',
          style({ position: 'absolute', top: 0, left: 0, right: 0 })
        ),
        // animate the leave page away
        group([
          query(':leave', [
            animate(
              '1s cubic-bezier(.35,0,.25,1)',
              style({
                transform: 'translateX(-100%) rotate(180deg)',
              })
            ),
          ]),
          // and now reveal the enter
          query(
            ':enter',
            animate(
              '1s linear',
              style({
                transform: 'translateX(0%)',
              })
            )
          ),
        ]),
      ]),
      transition('7 => 6, 6 => 5, 6 => 2, 5 => 2, 3 => 2, 2 => 1', [
        style({ height: '!' }),
        query(
          ':enter',
          style({
            transform: 'translateX(-100%)',
          })
        ),
        query(
          ':enter, :leave',
          style({ position: 'absolute', top: 0, left: 0, right: 0 })
        ),
        // animate the leave page away
        group([
          query(':leave', [
            animate(
              '1s cubic-bezier(.35,0,.25,1)',
              style({
                transform: 'translateX(100%) rotate(180deg)',
              })
            ),
          ]),
          // and now reveal the enter
          query(
            ':enter',
            animate(
              '1s linear',
              style({
                transform: 'translateX(0%)',
              })
            )
          ),
        ]),
      ]),
    ]),
  ],
})
export class EventsAdminComponent implements OnInit {
  title = 'GlobalBusiness';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['companySpace/eventsAdmin/publicEvents']);
  }

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }
}
