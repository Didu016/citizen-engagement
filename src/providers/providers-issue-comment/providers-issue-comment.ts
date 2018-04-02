import { IssueCommentsResponse } from './../../models/issue-comments/issue-comments-response';
import { IssueComments } from './../../models/issue-comments/issue-comments';
import { config } from './../../app/config';
import { Observable } from 'rxjs/Observable';
import { IssueResponse } from './../../models/issue/issue-response';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiIssue = `${config.apiUrl}/issues/`;

/*
  Generated class for the ProvidersIssueCommentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IssueCommentProvider {

  constructor(public httpClient: HttpClient) {
    console.log('Hello ProvidersIssueCommentProvider Provider');
  }

  getCommentsIssue(issue: IssueResponse): Observable<IssueCommentsResponse[]> {
    return this.httpClient.get<IssueCommentsResponse[]>(apiIssue + issue.id + '/comments');        
  }

  addCommentsIssue(issueComments: IssueComments, issue: IssueResponse):  Observable<IssueResponse> {
    let newComments;    
     this.httpClient.post<IssueComments>(apiIssue + issue.id + '/comments', issueComments).subscribe(response => {
      newComments = response;
      console.log(newComments);
     }, err => {
      console.warn('Could not post the comments', err);
    });
     return newComments;
  }

}
