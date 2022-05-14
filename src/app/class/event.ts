import { Category } from './category';
import { Company } from './company';
import { Image } from './image';

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
  image: Image;

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
