import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../class/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private baseUrl = 'http://localhost:8082/GlobeBusiness';

  constructor(private http: HttpClient) {}

  getCategories() {
    //return this.http.get<any>("http://localhost:3000/events/");
    return this.http.get<Category[]>(`${this.baseUrl}` + '/ListAllCategories');
  }

  getCategory(name: string) {
    //return this.http.get<any>("http://localhost:3000/events/");
    return this.http.get<Category>(`${this.baseUrl}` + '/ListCategory/' + name);
  }

  PostCategory(data: Category) {
    //return this.http.post<any>("http://localhost:3000/events/", data);
    return this.http.post<Category>(`${this.baseUrl}` + '/AddCategory', data);
  }

  deleteCategory(categoryId: number) {
    //return this.http.delete<any>("http://localhost:3000/events/"+id);
    return this.http.delete<Category>(
      `${this.baseUrl}` + '/deleteCategory/' + categoryId
    );
  }
}
