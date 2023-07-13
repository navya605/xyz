import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from './information/data.service';
import { RequestsService } from './information/requests.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'practice';
  selectedId : number;
  usersData : User[];
  subscription :Subscription;
  constructor( private requestService : RequestsService ){}

  ngOnInit(){
    this.subscription = this.requestService.fetchData().subscribe(responseData =>{
      this.usersData = responseData;
      console.log(this.usersData);
    });
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
