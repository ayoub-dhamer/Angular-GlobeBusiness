import { Category } from './category';
import { Company } from './company';

export class Event {
  eventId: number;
  description: string;
  duration: string;
  location: string;
  startDate: Date;
  title: string;
  type: string;
  category: Category;
  company: Company;

  constructor(
    description: string,
    duration: string,
    location: string,
    startDate: Date,
    title: string
  ) {
    this.description = description;
    this.duration = duration;
    this.location = location;
    this.startDate = startDate;
    this.title = title;
  }
}
