import { Injectable } from '@angular/core';
import { travel } from "../Model/Travel";
import { Observable } from "rxjs";
import { HttpClient,HttpHeaders } from "@angular/common/http";

const httpOptions = {
  Headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  travels!: travel[];
  travel!: travel;

  private baseUrl = 'http://localhost:8082/GlobeBusiness/travelcontrol/';  

  constructor(private http : HttpClient) { }

  ListTravel(){
    return this.http.get<travel[]>(`${this.baseUrl}`+'listtravel');

}

addtravel(t : object):Observable<any>{
  return this.http.post(`${this.baseUrl}`+'addtravel', t);
}

deletetravel(id: number): Observable<object>{
  return this.http.delete(`${this.baseUrl}/deletetravel/${id}`); 
}

viewTravel(id: number): Observable<any>{
  return this.http.get(`${this.baseUrl}/retrieveby/${id}`);

}

updatetravel(id: number, value: any): Observable<Object>{
  return this.http.post(`${this.baseUrl}/updatetravel/${id}`, value);  

}


findtravelbytoday():Observable<travel[]>{
  return this.http.get<travel[]>(`${this.baseUrl}`+'findTravelbyToday');
}

//we need to work on findby 2 dates + matching

matching(id: number):Observable<travel[]>{
  return this.http.get<travel[]>(`${this.baseUrl}/travelmatching/${id}`);  
}
}
