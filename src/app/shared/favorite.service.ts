import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favorite } from '../class/favorite';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private baseUrl = 'http://localhost:8082/GlobeBusiness';

  constructor(private http: HttpClient) {}

  PostFavorite(eventId: number, employeeId: number) {
    //return this.http.post<any>("http://localhost:3000/events/", data);
    return this.http.post<Favorite>(
      `${this.baseUrl}` + '/AddFavorite/' + eventId + '/' + employeeId,
      null
    );
  }

  getFavoriteEvents(employeeId: number) {
    //return this.http.get<any>("http://localhost:3000/events/");
    return this.http.get<Favorite[]>(
      `${this.baseUrl}` + '/ListFavoritesForEmployee/' + employeeId
    );
  }

  deleteFavorite(id: number) {
    //return this.http.delete<any>("http://localhost:3000/events/"+id);
    return this.http.delete<Favorite>(
      `${this.baseUrl}` + '/deleteFavorite/' + id
    );
  }

  getFavoriteForEvent(eventId: number, employeeId: number) {
    //return this.http.get<any>("http://localhost:3000/events/");
    return this.http.get<Favorite>(
      `${this.baseUrl}` +
        '/ListFavoritesForEmployee/' +
        eventId +
        '/' +
        employeeId
    );
  }
}
