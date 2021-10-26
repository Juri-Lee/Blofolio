import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import {Profile} from './profile';
import { Post } from './post';
import { PostService } from './post.service';
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  postModel : Post; 

  isloggin = localStorage.getItem('loggedIn');
  constructor( private postService : PostService) {

    this.postModel = new Post(null,null,null,null,null,null);
   }
   
  ngOnInit(): void {
  }

  response : any;
  // onSubmit(form: any): void {
  //   console.log('You submitted value: ', form);

  //   let form_entry = new Profile(form.email, form.name, form.image,form.discp, form.about);
  //   // this.userList = form_entry;

    
  //    //prepare data
  //   //  let params = JSON.stringify(this.userList);
  //    let params = JSON.stringify(form_entry);

  //    //use OrdersService to send request to php
  //    this.profileservice.processOrder(params)
  //    .subscribe( (data)=> {
  //       //use the response
  //       this.response = data; 
  //    }, (error) => {
  //       console.log('Error',error);
  //    })
  //   }

  logout() : void{
    console.log("click logout")!
    localStorage.setItem('loggedIn','false');
    localStorage.clear();
  }
    getPost(form: any ): void{
      
    form.email = localStorage.getItem('email')
    form.date =  Date.now();
    let form_entry = new Post(form.email, form.date, form.title, form.subtitle,form.imageURL, form.text);
    // this.userList = form_entry;

    // console.log(form_entry);
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
}
