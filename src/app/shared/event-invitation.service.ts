import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../class/employee';
import { EventInvitation } from '../class/event-invitation';

@Injectable({
  providedIn: 'root',
})
export class EventInvitationService {
  private baseUrl = 'http://localhost:8082/GlobeBusiness';

  constructor(private http: HttpClient) {}

  PostEventInvitation(data: Employee[], eventId: number, companyId: number) {
    //return this.http.post<any>("http://localhost:3000/events/", data);
    return this.http.post<EventInvitation>(
      `${this.baseUrl}` + '/AddEventInvitation/' + eventId + '/' + companyId,
      data
    );
  }

  AcceptInvitation(eventInvitationId: number) {
    //return this.http.post<any>("http://localhost:3000/events/", data);
    return this.http.put<EventInvitation>(
      `${this.baseUrl}` + '/AcceptEventInvitation/' + eventInvitationId,
      null
    );
  }

  RefuseInvitation(eventInvitationId: number) {
    //return this.http.post<any>("http://localhost:3000/events/", data);
    return this.http.put<EventInvitation>(
      `${this.baseUrl}` + '/RefuseEventInvitation/' + eventInvitationId,
      null
    );
  }

  ListAllEventInvitationsForEmployee(employeeId: number) {
    return this.http.get<EventInvitation[]>(
      `${this.baseUrl}` + '/ListAllEventInvitationsForEmployee/' + employeeId
    );
  }
}
