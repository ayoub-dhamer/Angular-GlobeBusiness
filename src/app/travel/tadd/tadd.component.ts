import { Component, OnInit } from '@angular/core';
import { travel } from 'src/app/Model/Travel';
import { TravelService } from 'src/app/service/travel.service';
import {FormBuilder, FormControl,FormGroup,Validators} from '@angular/forms';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-tadd',
  templateUrl: './tadd.component.html',
  styleUrls: ['./tadd.component.css']
})
export class TaddComponent implements OnInit {

 travel: travel = new travel();
  constructor(private router: Router, private travelservice : TravelService ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const t ={
      date_begin:this.travel.date_begin,
      date_end:this.travel.date_end,
      destination:this.travel.destination,
      state:this.travel.state,
      city:this.travel.city,
      objective:this.travel.objective

    };
    this.travelservice.addtravel(t)
      .subscribe(data => {
        this.router.navigate(['list-t']);
      });
  }
  
}
