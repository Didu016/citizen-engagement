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

  getIssues(): Observable<HttpResponse<Issue[]>> {    
    return this.httpClient.get<Issue[]>(
      apiIssue + '?include=creator&include=issueType', 
      {observe: 'response' } )
      .do(console.log);
  }

  addIssue(issue: Issue):  Observable<Issue> {
    let newIssue;
     this.httpClient.post<Issue>(apiIssue, issue).subscribe(response => {
      newIssue = response;
      console.log(newIssue);
     }, err => {
      console.warn('Could not post issue', err);
    });
     return newIssue;
  }

}
