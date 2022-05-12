import { Company } from './company';
import { Employee } from './employee';
import { Event } from './event';

export class EventInvitation {
  invitationId: number;
  date: Date;
  state: string;
  employee: Employee;
  event: Event;
  company: Company;

  constructor(
    date: Date,
    state: string,
    employee: Employee,
    event: Event,
    company: Company
  ) {
    this.date = date;
    this.state = state;
    this.employee = employee;
    this.event = event;
    this.company = company;
  }
}
