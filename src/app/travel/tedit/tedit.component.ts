import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { travel } from 'src/app/Model/Travel';
import { TravelService } from 'src/app/service/travel.service';

@Component({
  selector: 'app-tedit',
  templateUrl: './tedit.component.html',
  styleUrls: ['./tedit.component.css']
})
export class TeditComponent implements OnInit {
  currentTravel:travel = new travel();
  id!: number ;
  captcha!:string;


  constructor( private activated: ActivatedRoute, private route: Router ,private travelservice:TravelService) {
    this.captcha='';
   }

  ngOnInit(): void {
    this.id=this.activated.snapshot.params['id'];
    this.travelservice.viewTravel(this.id).subscribe(data =>{ this.currentTravel =data ;},error => console.log(error))

  }

  updatetravel(){
    this.travelservice.updatetravel(this.id ,this.currentTravel).subscribe(data =>{ this.redirecting()},
    error => console.log(error));
  }

  redirecting(){
    this.route.navigate(['list-t']);
  }

  deletetravel(id:number){
    this.travelservice.deletetravel(id).subscribe(data =>{ console.log(data)})
  }

  resolved(captchaResponse :string){
    this.captcha= captchaResponse;
    console.log('resolved captcha with response :'+this.captcha)

  }

}
