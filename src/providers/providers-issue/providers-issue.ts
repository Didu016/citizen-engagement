import { IssueResponse } from './../../models/issue/issue-response';
import { config } from './../../app/config';
import { Issue } from './../../models/issue/issue';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiIssue = `${config.apiUrl}/issues`;

/*
  Generated class for the sIssueProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IssueProvider {

  constructor(public httpClient: HttpClient) {
    console.log('Hello IssueProvider Provider');
  }

  getIssues(): Observable<HttpResponse<IssueResponse[]>> {    
    return this.httpClient.get<IssueResponse[]>(
      apiIssue + '?include=creator&include=issueType', 
      {observe: 'response' } )      
  }

  addIssue(issue: Issue):  Observable<IssueResponse> {
    let newIssue;
     this.httpClient.post<IssueResponse>(apiIssue, issue).subscribe(response => {
      newIssue = response;
      console.log(newIssue);
     }, err => {
      console.warn('Could not post issue', err);
    });
     return newIssue;
  }

}
