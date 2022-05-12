import { Component, Inject, OnInit } from '@angular/core';

import { NgToastService } from 'ng-angular-popup';

import { RatingService } from '../shared/rating.service';
import { EventsService } from '../shared/events.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Rating } from '../class/rating';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css'],
})
export class RatingsComponent implements OnInit {
  ratings: Rating[];
  displayedColumns: string[] = ['Comment', 'Date', 'Score', 'Employee'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private ratingService: RatingService,
    private eventService: EventsService,
    @Inject(MAT_DIALOG_DATA) public editData: number,
    private dialogRef: MatDialogRef<RatingsComponent>,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    console.log(this.editData);
    this.getRatingsForEvent();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRatingsForEvent() {
    this.ratingService.getRatingsForEvent(this.editData).subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Error while retreaving the ratings data',
          sticky: true,
        });
      },
    });
  }
}
