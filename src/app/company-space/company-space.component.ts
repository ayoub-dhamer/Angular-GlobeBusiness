import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CompanyService } from '../shared/company.service';

import { NgToastService } from 'ng-angular-popup';

import {
  trigger,
  transition,
  group,
  query,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-company-space',
  templateUrl: './company-space.component.html',
  styleUrls: ['./company-space.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition('1 => 2, 2 => 3', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(
          ':enter, :leave',
          style({ position: 'absolute', top: 0, left: 0, right: 0 })
        ),
        // animate the leave page away
        group([
          query(':leave', [
            animate(
              '0.3s cubic-bezier(.35,0,.25,1)',
              style({ transform: 'translateX(-100%)' })
            ),
          ]),
          // and now reveal the enter
          query(
            ':enter',
            animate(
              '0.3s cubic-bezier(.35,0,.25,1)',
              style({ transform: 'translateX(0)' })
            )
          ),
        ]),
      ]),
      transition('3 => 2, 2 => 1', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        query(
          ':enter, :leave',
          style({ position: 'absolute', top: 0, left: 0, right: 0 })
        ),
        // animate the leave page away
        group([
          query(':leave', [
            animate(
              '0.3s cubic-bezier(.35,0,.25,1)',
              style({ transform: 'translateX(100%)' })
            ),
          ]),
          // and now reveal the enter
          query(
            ':enter',
            animate(
              '0.3s cubic-bezier(.35,0,.25,1)',
              style({ transform: 'translateX(0)' })
            )
          ),
        ]),
      ]),
    ]),
  ],
})
export class CompanySpaceComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  companyName;

  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    private companyService: CompanyService,
    private toast: NgToastService
  ) {}

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }

  ngOnInit(): void {
    this.companyName = localStorage.getItem('companyName');
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/']);
    this.toast.info({
      detail: 'Disconnected',
      summary: 'You have Logged out of your account',
      sticky: true,
    });
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }
}
