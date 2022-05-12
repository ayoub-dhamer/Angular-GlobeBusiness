import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Model/Post';
import { PostService } from 'src/app/Service/Post.Service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {

  posts: Post[] | any;
  constructor( private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }
  private getPosts() {
    this.postService.getAllPosts().subscribe(data=>{
      this.posts=data;
      console.log(data);
    });
  }

}
