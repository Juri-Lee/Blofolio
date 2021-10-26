import { Component, OnInit,Input } from '@angular/core';
import { Checkuser } from './checkuser';
import { CheckuserService } from './checkuser.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  itemImageUrl = "./image/beta.png"
  
  checkModel: Checkuser;
  
  constructor(private checkuserService: CheckuserService) {
    this.checkModel = new Checkuser(null,null);
   }

  ngOnInit(): void {

  }
  isloggin = localStorage.getItem('loggedIn');
  response: any; 
  errormsg = true; 
  onSubmit(form:any): void {
    console.log('You submitted value: ', form);

    let form_entry = new Checkuser(form.email, form.pwd);
    // this.userList = form_entry;

    
     //prepare data
    //  let params = JSON.stringify(this.userList);
     let params = JSON.stringify(form_entry);

     //use OrdersService to send request to php
     this.checkuserService.processOrder(params)
     .subscribe( (data)=> {
        //use the response
        this.response = data; 
     }, (error) => {
        console.log('Error',error);
     })

     if(this.response.error == "login success!!"){
      this. errormsg = false
      localStorage.setItem('loggedIn','true');
      localStorage.setItem('email',this.response.email);

     }

    }
    logout() : void{
      console.log("click logout")!
      localStorage.setItem('loggedIn','false');
      localStorage.clear();
    }
    
    
    
}
