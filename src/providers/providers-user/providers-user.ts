import { config } from './../../app/config';
import { User } from './../../models/user/user';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';

const apiUser = `${config.apiUrl}/users`;
const apiMe = `${config.apiUrl}/me`;

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {  

  constructor(public httpClient: HttpClient) {   }

  getUser(): Observable<User> {    
    
    return this.httpClient
      .get<User>(apiUser)
  }

  addUser(user: User):  Observable<User> {
    let newUser;    
     this.httpClient.post<User>(apiUser, user).subscribe(response => {
      newUser = response;      
      console.log("new User created");
     }, err => {
      console.warn('Could not post user', err);
    });
     return newUser;
  }

  getMe(){
    return this.httpClient
      .get<User>(apiMe)
  }

}
