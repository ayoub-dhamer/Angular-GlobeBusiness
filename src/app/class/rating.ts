import { Event } from './event';
import { Employee } from './employee';

export class Rating {
  rateId: number;
  nbOfStars: number;
  date: Date;
  comment: string;
  event: Event;
  employee: Employee;

  constructor(
    rateId: number,
    nbOfStars: number,
    date: Date,
    comment: string,
    event: Event,
    employee: Employee
  ) {
    this.rateId = rateId;
    this.nbOfStars = nbOfStars;
    this.date = date;
    this.comment = comment;
    this.event = event;
    this.employee = employee;
  }
}
