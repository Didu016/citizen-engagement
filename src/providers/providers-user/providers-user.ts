import { config } from './../../app/config';
import { User } from './../../models/user/user';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {  

  constructor(public httpClient: HttpClient) {   }

  getUser(): Observable<User> {
    const apiUser = `${config.apiUrl}/users`;
    
    return this.httpClient
      .get<User>(apiUser)
  }

  addUser(user: User):  Observable<User> {
    return this.httpClient.post<User>(config.apiUrl, user);    
  }

}
