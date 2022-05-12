import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { EmployeeService } from '../shared/employee.service';

import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-employee-space',
  templateUrl: './employee-space.component.html',
  styleUrls: ['./employee-space.component.css'],
})
export class EmployeeSpaceComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  employeeName;

  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    private employeeService: EmployeeService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.employeeName =
      localStorage.getItem('employeeName') +
      ' ' +
      localStorage.getItem('employeeLastName');
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
