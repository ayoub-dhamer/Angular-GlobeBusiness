import { Injectable } from '@angular/core';
import { Employee } from '../class/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseUrl = 'http://localhost:8082/GlobeBusiness';
  employeeId;
  employeeEmail;
  employeeLastName;
  employeeName;
  constructor(private http: HttpClient) {}

  logInEmployee(email: string, passwd: string) {
    //return this.http.get<any>("http://localhost:3000/events/");
    return this.http.get<any>(
      `${this.baseUrl}` + '/logInEmployee/' + email + '/' + passwd
    );
  }

  getEmployeesForCompany(companyId: number) {
    //return this.http.get<any>("http://localhost:3000/events/");
    return this.http.get<Employee[]>(
      `${this.baseUrl}` + '/listAllEmployeesForCompany/' + companyId
    );
  }
}
