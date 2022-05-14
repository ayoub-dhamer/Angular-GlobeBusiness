import { Component, OnInit } from '@angular/core';

import { AddEventComponent } from '../add-event/add-event.component';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventsService } from '../shared/events.service';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-private-events',
  templateUrl: './private-events.component.html',
  styleUrls: ['./private-events.component.css'],
})
export class PrivateEventsComponent implements OnInit {
  displayedColumns: string[] = [
    'description',
    'duration',
    'location',
    'startDate',
    'title',
    'Status',
    'category',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;
  TodaysDate = new Date();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private eventsService: EventsService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.getAllEvents();
  }

  openDialog() {
    this.dialog
      .open(AddEventComponent, {
        width: '30%',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'save') {
          this.getAllEvents();
        }
      });
  }

  getAllEvents() {
    this.eventsService
      .getPrivateEventsForCompany(Number(localStorage.getItem('companyId')))
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editEvent(row: any) {
    this.dialog
      .open(AddEventComponent, {
        width: '30%',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'update') {
          this.getAllEvents();
        }
      });
  }

  deleteEvent(id: number) {
    this.eventsService.deleteEvent(id).subscribe({
      next: (res) => {
        this.toast.success({
          detail: 'Success',
          summary: 'Event deleted successfully',
          duration: 3000,
        });
        this.getAllEvents();
      },
      error: () => {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Error while deleting the Event',
          duration: 3000,
        });
      },
    });
  }
}
