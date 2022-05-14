import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rating } from '../class/rating';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  private baseUrl = 'http://localhost:8082/GlobeBusiness';

  constructor(private http: HttpClient) {}

  PostRating(data: Rating, eventId: number, employeeId: number) {
    //return this.http.post<any>("http://localhost:3000/events/", data);
    return this.http.post<Event>(
      `${this.baseUrl}` + '/AddRating/' + eventId + '/' + employeeId,
      data
    );
  }

  getRatingByEmployeeForEvent(eventId: number, employeeId: number) {
    //return this.http.get<any>("http://localhost:3000/events/");
    return this.http.get<Rating>(
      `${this.baseUrl}` + '/ListRatingForEvent/' + eventId + '/' + employeeId
    );
  }

  getRatingsByEmployee(employeeId: number) {
    //return this.http.get<any>("http://localhost:3000/events/");
    return this.http.get<Rating[]>(
      `${this.baseUrl}` + '/ListAllRatings/' + employeeId
    );
  }

  putRating(data: Rating, id: number) {
    //return this.http.put<any>("http://localhost:3000/events/"+id, data);
    return this.http.put<Rating>(
      `${this.baseUrl}` + '/updateRating/' + id,
      data
    );
  }

  deleteRating(id: number) {
    //return this.http.delete<any>("http://localhost:3000/events/"+id);
    return this.http.delete<Rating>(`${this.baseUrl}` + '/deleteRating/' + id);
  }

  getRatingsForEvent(eventId: number) {
    //return this.http.get<any>("http://localhost:3000/events/");
    return this.http.get<Rating[]>(
      `${this.baseUrl}` + '/listRatingsForEvent/' + eventId
    );
  }
}
