import { Injectable } from '@angular/core';
import { Company } from '../class/company';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private baseUrl = 'http://localhost:8082/GlobeBusiness';

  constructor(private http: HttpClient) {}

  logInCompany(email: string, passwd: string) {
    //return this.http.get<any>("http://localhost:3000/events/");
    return this.http.get<Company>(
      `${this.baseUrl}` + '/logInCompany/' + email + '/' + passwd
    );
  }

  getCompany(id: number) {
    //return this.http.get<any>("http://localhost:3000/events/");
    return this.http.get<Company>(`${this.baseUrl}` + '/getCompanyById/' + id);
  }
}
