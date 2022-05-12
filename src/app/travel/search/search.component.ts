import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { travel } from 'src/app/Model/Travel';
import { TravelService } from 'src/app/service/travel.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  TravelList!: travel[];
  displayedColumns: string[] = ['id', 'date_begin', 'date_end', 'destination','state','city','objective'];
  dataSource!: MatTableDataSource<travel>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private travelservice: TravelService) { }

  ngOnInit(): void {
    this.travelservice.findtravelbytoday().subscribe(data =>{console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  })
    
  }

}
