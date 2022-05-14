import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';

import { NgToastService } from 'ng-angular-popup';
import { Employee } from '../class/employee';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { SelectionModel } from '@angular/cdk/collections';

import { ActivatedRoute } from '@angular/router';
import { EventInvitationService } from '../shared/event-invitation.service';

import { Router } from '@angular/router';

import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';
import { untilDestroyed } from '@ngneat/until-destroy';

import {
  trigger,
  transition,
  group,
  query,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-invited-employees',
  templateUrl: './invited-employees.component.html',
  styleUrls: ['./invited-employees.component.css'],
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
export class InvitedEmployeesComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'id',
    'Full Name',
    'Email',
    'Gender',
    'Phone',
    'Profession',
    'Birth Date',
  ];
  employees: Employee[];
  dataSource!: MatTableDataSource<any>;

  selection = new SelectionModel<Employee>(true, []);

  eventId;
  search;
  spinner = false;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  companyName;
  companyDomain;
  companyImage;

  selectedemployees: Employee[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private employeeService: EmployeeService,
    private eventInvitationService: EventInvitationService,
    private toast: NgToastService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private observer: BreakpointObserver
  ) {}

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
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

  onEmployeeToggled(employee: Employee) {
    if (this.selectedemployees.includes(employee)) {
      this.removeElementFromEmployeesList(employee.id);
    } else {
      this.selectedemployees.push(employee);
    }
  }

  goBack() {
    this.router.navigate(['companySpace/eventsAdmin/privateEvents']);
  }

  sendInvitation() {
    this.spinner = true;
    this.eventInvitationService
      .PostEventInvitation(
        this.selectedemployees,
        this.eventId,
        Number(localStorage.getItem('companyId'))
      )
      .subscribe({
        next: (res) => {
          this.toast.success({
            detail: 'Success',
            summary: 'Invitation was sent successfully',
            duration: 3000,
          });
          this.spinner = false;
          //this.router.navigate(['companySpace/eventsAdmin/privateEvents']);
        },
        error: () => {
          this.toast.error({
            detail: 'ERROR',
            summary: 'Error while sending the invitation',
            duration: 3000,
          });
        },
      });
  }

  removeElementFromEmployeesList(key: number) {
    this.selectedemployees.forEach((value, index) => {
      if (value.id == key) this.selectedemployees.splice(index, 1);
    });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.eventId = params.get('eventId');
    });
    this.getEmployeesForCompany();

    this.companyName = localStorage.getItem('companyName');
    this.companyDomain = localStorage.getItem('companyDomain');
    this.companyImage = localStorage.getItem('companyImage');
  }

  getEmployeesForCompany() {
    this.employeeService
      .getEmployeesForCompany(Number(localStorage.getItem('companyId')))
      .subscribe({
        next: (res) => {
          this.employees = res;
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: () => {
          this.toast.error({
            detail: 'ERROR',
            summary: 'Error while retreaving the employees',
            duration: 3000,
          });
        },
      });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.selectedemployees = [];
      return;
    }

    this.selectedemployees = this.employees;
    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Employee): string {
    if (!row) {
      console.log(row);
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
      console.log(row);
    }
    console.log(row);
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }
}
