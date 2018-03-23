import { config } from './../../app/config';
import { Issue } from './../../models/issue/issue';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProvidersIssueProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvidersIssueProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProvidersIssueProvider Provider');
  }

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(config.apiUrl + '/issues?include=creator&include=issueType' );
  }

}
