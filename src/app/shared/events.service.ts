import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../class/event';
import { EventInvitation } from '../class/event-invitation';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private baseUrl = 'http://localhost:8082/GlobeBusiness';

  constructor(private http: HttpClient) {}

  PostEvent(data: Event, categoryName: string, type: string, id: number) {
    //return this.http.post<any>("http://localhost:3000/events/", data);
    return this.http.post<Event>(
      `${this.baseUrl}` + '/AddEvent/' + categoryName + '/' + type + '/' + id,
      data
    );
  }

  getEvents(companyId: number, employeeId: number) {
    //return this.http.get<any>("http://localhost:3000/events/");
    return this.http.get<Event[]>(
      `${this.baseUrl}` + '/ListAllEvents/' + companyId + '/' + employeeId
    );
  }

  getPublicEventsForCompany(id: number) {
    //return this.http.get<any>("http://localhost:3000/events/");
    return this.http.get<Event[]>(
      `${this.baseUrl}` + '/ListPublicEventsForCompany/' + id
    );
  }

  getPrivateEventsForCompany(id: number) {
    //return this.http.get<any>("http://localhost:3000/events/");
    return this.http.get<Event[]>(
      `${this.baseUrl}` + '/ListPrivateEventsForCompany/' + id
    );
  }

  getEventsForEmployee(companyId: number, employeeId: number) {
    //return this.http.get<any>("http://localhost:3000/events/");
    return this.http.get<Event[]>(
      `${this.baseUrl}` +
        '/ListEventsForEmployee/' +
        companyId +
        '/' +
        employeeId
    );
  }

  getPrivateEventsForEmployee(employeeId: number) {
    //return this.http.get<any>("http://localhost:3000/events/");
    return this.http.get<EventInvitation[]>(
      `${this.baseUrl}` + '/ListPrivateEventsForEmployee/' + employeeId
    );
  }

  putEvent(data: Event, id: number, categoryName: string) {
    //return this.http.put<any>("http://localhost:3000/events/"+id, data);
    return this.http.put<Event>(
      `${this.baseUrl}` + '/updateEvent/' + id + '/' + categoryName,
      data
    );
  }

  deleteEvent(id: number) {
    //return this.http.delete<any>("http://localhost:3000/events/"+id);
    return this.http.delete<Event>(`${this.baseUrl}` + '/deleteEvent/' + id);
  }
}
