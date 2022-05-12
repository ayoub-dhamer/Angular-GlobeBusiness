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

@Component({
  selector: 'app-invited-employees',
  templateUrl: './invited-employees.component.html',
  styleUrls: ['./invited-employees.component.css'],
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

  selectedemployees: Employee[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private employeeService: EmployeeService,
    private eventInvitationService: EventInvitationService,
    private toast: NgToastService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

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
    console.log(this.selectedemployees);
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
