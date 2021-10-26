import { Component, OnInit } from '@angular/core';
import {User} from'./user'
import { UserService } from './user.service';
import { Observable, throwError } from 'rxjs';
import{HttpClient, HttpErrorResponse,HttpParams} from '@angular/common/http' ;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  isloggin = localStorage.getItem('loggedIn');
  userModel: User;
  // userList: Array<User> = [] ;

  constructor(private userService: UserService) {
    this.userModel = new User(null,null,null,null);
   }

  ngOnInit(): void {
  }


  response: any; 
  
  
  onSubmit(form: any): void {
    console.log('You submitted value: ', form);

    let form_entry = new User(form.name, form.email, form.pwd, form.repwd);
    // this.userList = form_entry;


    if(this.validation(form_entry)){
     //prepare data
    //  let params = JSON.stringify(this.userList);
     let params = JSON.stringify(form_entry);

     //use OrdersService to send request to php
     this.userService.processOrder(params)
     .subscribe( (data)=> {
        //use the response
        this.response = data; 
     }, (error) => {
        console.log('Error',error);
     })
    }
 }
 logout() : void{
  console.log("click logout")!
  localStorage.setItem('loggedIn','false');
  localStorage.clear();
}

 validation(form: any) : boolean{
   var number = /[0-9]/;
   var uppercaseletter = /[A-Z]/;
   var lowercaseletter = /[a-z]/;
   var at ='@';
   if(form['name'].length<6){
    return false ; 
  }
  if(!form['email'].match(at)){
    console.log('email');
    return false; 
  }
  if(form['pwd'].length >5){
  if(!(form['pwd'].match(lowercaseletter) && form['pwd'].match(uppercaseletter) && form['pwd'].match(number))){
    return false; 
  }else{
    if(form['pwd'] != form['repwd']){
      console.log('not match');
      return false
    }
  }
  }else{
    return false;
  }

  return true; 
  }
}
