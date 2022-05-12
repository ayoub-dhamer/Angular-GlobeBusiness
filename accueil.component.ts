import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../service/company.service';
import { EmployeeService } from '../service/employee.service';
import { InvitationService } from '../service/invitation.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  name : String;
  prenom : String;
  role:String;
  img : any =0;
email : any=0;
dn : any=0;
num : any=0;
login : any=0;
adr : any=0;

  constructor(public companyService : CompanyService,private router : Router,
    public employeeService : EmployeeService
    ,public invitationService : InvitationService ,) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.prenom = localStorage.getItem('lastName');
    this.role = localStorage.getItem('roles');
    this.img = localStorage.getItem('image');
    this.email = localStorage.getItem('email');
    this.dn = localStorage.getItem('birthday');
    this.num = localStorage.getItem('phone');

    this.login = localStorage.getItem('login');

    this.adr = localStorage.getItem('address');







  }

}
