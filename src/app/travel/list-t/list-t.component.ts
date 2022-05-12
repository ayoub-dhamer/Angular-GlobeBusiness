import { identifierName } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { travel } from 'src/app/Model/Travel';
import { TravelService } from 'src/app/service/travel.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-list-t',
  templateUrl: './list-t.component.html',
  styleUrls: ['./list-t.component.css']
})
export class ListTComponent implements OnInit {

  displayedColumns: string[] = ['id', 'date_begin', 'date_end', 'destination','state','city','objective'];
  TravelList!: travel[];
  dataSource!: MatTableDataSource<travel>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private travelservice: TravelService) {
   }

  ngOnInit(): void {
    this.travelservice.ListTravel().subscribe(t =>{
      console.log(t);
      this.dataSource = new MatTableDataSource(t);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
