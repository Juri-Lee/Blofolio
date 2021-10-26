import { Injectable } from '@angular/core';
import{HttpClient, HttpErrorResponse,HttpParams} from '@angular/common/http' ;
import{Observable, throwError} from 'rxjs';
import { ThrowStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class CheckuserService {
  constructor(private http: HttpClient) { }
  //controller --> processOrder --> sendRequest
  sendRequest(data:any) : Observable<any>{
    return  this.http.post<any>('http://localhost/loginuser.php',data);
  }
  processOrder(data:any ): Observable<any>{
    //data cleaning, processing
    //send a request to php
    return this.sendRequest(data);
  }

}
