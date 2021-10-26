import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }
  isloggin = 'false';
  ngOnInit(): void {
  }

  logout() : void{
  console.log("logout!")
  localStorage.setItem('loggedIn','false');
  localStorage.clear();
}
}