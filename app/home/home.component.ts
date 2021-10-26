import { NgModule, Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import {Post} from './post'
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postModel : Post; 

  isloggin = localStorage.getItem('loggedIn');
  
  constructor( private postService : PostService) {

    this.postModel = new Post(null);
    console.log(this.isloggin);
   }
  
  ngOnInit(): void {
  }

 
  response: any; 

  onSubmit(form:any): void {
    console.log('You submitted value: ', form);

    form.email = localStorage.getItem('email')
    // let form_entry = new Post(form.email, form.date, form.title, form.subtitle,form.imageURL, form.text);
    // this.userList = form_entry;
    let form_entry = new Post(form.search);
    
     //prepare data
    //  let params = JSON.stringify(this.userList);
     let params = JSON.stringify(form_entry);

     //use OrdersService to send request to php
     this.postService.processOrder(params)
     .subscribe( (data)=> {
        //use the response
        this.response = data; 
     }, (error) => {
        console.log('Error',error);
     })

  

    }

    logout() : void{
      console.log("click logout")!
      localStorage.setItem('loggedIn','false');
      localStorage.clear();
    }

}
