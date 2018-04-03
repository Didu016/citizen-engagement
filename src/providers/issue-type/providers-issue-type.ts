import { IssueType } from './../../models/issue-type/issue-type';
import { Observable } from 'rxjs/Observable';
import { config } from './../../app/config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IssueTypeResponse } from '../../models/issue-type/issue-type-response';

const apiIssueType = `${config.apiUrl}/issueTypes`;

/*
  Generated class for the IssueTypeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IssueTypeProvider {

  constructor(public httpClient: HttpClient) {   }

  getIssueType(): Observable<IssueTypeResponse> {    
      return this.httpClient.get<IssueTypeResponse>(config.apiUrl + '/issueTypes' );    
  }

  addIssueType(issueType: IssueType):  Observable<IssueTypeResponse> {
    let newIssueType;
     this.httpClient.post<IssueTypeResponse>(apiIssueType, issueType).subscribe(response => {
      newIssueType = response;
      console.log(newIssueType);
     }, err => {
      console.warn('Could not post issue', err);
    });
     return newIssueType;
  }

}
