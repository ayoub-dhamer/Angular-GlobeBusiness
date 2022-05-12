import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/Model/Post';
import { PostService } from 'src/app/Service/Post.Service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  post: Post = new Post();
  constructor( private postService: PostService,private router:Router) { }

  ngOnInit(): void {
  }
  savePost(){
    this.postService.addPost(this.post).subscribe(data=>{
        console.log(data);
        this.post=data;
        this.goToPostsList();
      },
      error=>console.error(error))
  }

  goToPostsList(){
    this.router.navigate(['/news']);
  }

  public onSubmit(){
    this.savePost();
  }

}
