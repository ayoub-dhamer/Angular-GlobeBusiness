import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../Model/Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService{
    private baseUrl = 'http://localhost:8082/GlobeBusiness';
    constructor(private http: HttpClient) { }

    public getAllPosts(){
        return this.http.get(this.baseUrl+'/selectPost');
      } 
    
    public addPost(post: Post): Observable<Object>{
      return this.http.post(this.baseUrl+'/addPost?idEmployee=1',post)
    }
}