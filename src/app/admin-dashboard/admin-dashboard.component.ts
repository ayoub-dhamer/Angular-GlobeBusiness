import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { EmployeeService } from '../shared/employee.service';
import { EventsService } from '../shared/events.service';

import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../class/employee';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  nbOfEmployees;
  nbOfPublicEvents;
  nbOfPrivateEvents;
  nbOfTravels = 12;

  displayedColumns: string[] = [
    'Full Name',
    'Profession',
    'Phone',
    'Email',
    'Gender',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private employeeService: EmployeeService,
    private eventsService: EventsService,
    private toast: NgToastService
  ) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.getEmployeesForCompany();
    this.getPublicEvents();
    this.getPrivateEvents();
  }

  getEmployeesForCompany() {
    this.employeeService
      .getEmployeesForCompany(Number(localStorage.getItem('companyId')))
      .subscribe({
        next: (res) => {
          this.nbOfEmployees = res.length;
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

  getPublicEvents() {
    this.eventsService
      .getPublicEventsForCompany(Number(localStorage.getItem('companyId')))
      .subscribe({
        next: (res) => {
          this.nbOfPublicEvents = res.length;
        },
        error: () => {
          this.toast.error({
            detail: 'ERROR',
            summary: 'Error while getting events data',
            duration: 3000,
          });
        },
      });
  }

  getPrivateEvents() {
    this.eventsService
      .getPrivateEventsForCompany(Number(localStorage.getItem('companyId')))
      .subscribe({
        next: (res) => {
          this.nbOfPrivateEvents = res.length;
        },
        error: () => {
          this.toast.error({
            detail: 'ERROR',
            summary: 'Error while getting events data',
            duration: 3000,
          });
        },
      });
  }
}
