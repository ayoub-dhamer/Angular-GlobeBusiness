import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { travel } from 'src/app/Model/Travel';
import { TravelService } from 'src/app/service/travel.service';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {

  displayedColumns: string[] = ['id', 'date_begin', 'date_end', 'destination','state','city','objective'];
  id!: number ;
  TravelList!: travel[];

  dataSource!: MatTableDataSource<travel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private activated: ActivatedRoute,private travelservice: TravelService) { }

  ngOnInit(): void {
    this.id=this.activated.snapshot.params['id'];
    this.travelservice.matching(this.id).subscribe(t =>{
      console.log(t);
      this.dataSource = new MatTableDataSource(t);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
    })
  }

}
