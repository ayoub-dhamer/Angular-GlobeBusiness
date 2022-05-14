import { Component, Inject, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  Form,
} from '@angular/forms';
import { EmployeeService } from '../../../shared/employee.service';
import { CompanyService } from '../../../shared/company.service';
import { Employee } from '../../../class/employee';
import { Company } from '../../../class/company';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  logInForm!: FormGroup;
  switchForm!: FormGroup;
  switchValue = false;

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private companyService: CompanyService,
    private router: Router,
    private toast: NgToastService
  ) {}

  changeValue() {
    this.switchValue = this.switchForm.value.switch;
  }

  ngOnInit(): void {
    this.logInForm = this.formBuilder.group({
      email: ['', Validators.required],
      passwd: ['', Validators.required],
    });

    this.switchForm = this.formBuilder.group({
      switch: ['', Validators.required],
    });
  }

  logIn() {
    if (this.logInForm.valid) {
      if (this.switchValue) {
        this.employeeService
          .logInEmployee(
            this.logInForm.value.email,
            this.logInForm.value.passwd
          )
          .subscribe({
            next: (res) => {
              if (res == null) {
                this.toast.error({
                  detail: 'Error Message',
                  summary: 'Wrong Informations',
                  duration: 3000,
                });
              } else {
                localStorage.setItem('employeeId', '' + res.id);
                localStorage.setItem('employeeImage', '' + res.image);
                localStorage.setItem(
                  'employeeProfession',
                  '' + res.profession.name
                );
                localStorage.setItem('employeeEmail', '' + res.email);
                localStorage.setItem('employeeLastName', '' + res.lastName);
                localStorage.setItem('employeeName', '' + res.name);
                localStorage.setItem('companyId', '' + res.company.id);
                this.router.navigate(['/employeeSpace/employeeDashboard']);
                this.toast.success({
                  detail: 'Welcome MR',
                  summary: res.name + ' ' + res.lastName,
                  duration: 3000,
                });
              }
            },
            error: () => {
              this.toast.error({
                detail: 'ERROR',
                summary: 'Error while logging in',
                sticky: true,
              });
            },
          });
      } else {
        this.companyService
          .logInCompany(this.logInForm.value.email, this.logInForm.value.passwd)
          .subscribe({
            next: (res) => {
              if (res == null) {
                this.toast.error({
                  detail: 'Error',
                  summary: 'Wrong Informations',
                  duration: 3000,
                });
              } else {
                localStorage.setItem('companyId', '' + res.id);
                localStorage.setItem('companyName', '' + res.name);
                localStorage.setItem('companyDomain', '' + res.domain.name);
                localStorage.setItem('companyImage', '' + res.image);
                this.router.navigate(['/companySpace/adminDashboard']);
                this.toast.success({
                  detail: 'Welcome ',
                  summary: res.name,
                  duration: 3000,
                });
              }
            },
            error: () => {
              this.toast.error({
                detail: 'Error',
                summary: 'Error while logging in',
                duration: 3000,
              });
            },
          });
      }
    }
  }
}
