import { Observable } from 'rxjs/Observable';
import { config } from './../../app/config';
import { IssueType } from './../../models/issue-type/issue-type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the IssueTypeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IssueTypeProvider {

  constructor(public httpClient: HttpClient) {   }

  getIssueType(): Observable<IssueType> {    
      return this.httpClient.get<IssueType>(config.apiUrl + '/issueTypes' );    
  }

}
