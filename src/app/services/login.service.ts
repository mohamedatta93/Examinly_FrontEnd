import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { User } from '../model/User';
import {catchError, map, tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = '192.168.1.2:8080/';

  constructor(private http: HttpClient) { }
  requestLoginIn(user:User){
   return this.http.post(this.url + 'auth/login_in', user);

  }
}
