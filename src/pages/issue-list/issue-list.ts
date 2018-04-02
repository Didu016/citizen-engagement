import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';

import { HttpClient } from '@angular/common/http';
import { config } from './../../app/config';
import { IssueProvider } from './../../providers/providers-issue/providers-issue';
import { Issue } from '../../models/issue/issue';


/**
 * Generated class for the IssueListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-issue-list',
  templateUrl: 'issue-list.html',
})
export class IssueListPage {
  issues: Issue[];

  selectedIssue : Issue;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient,
              public issueProvider: IssueProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IssueListPage');
        //Load issues
        this.issueProvider.getIssues().subscribe(HTTPissues => {
          console.log(HTTPissues.headers.get("Pagination-Total"));
          this.issues = HTTPissues.body;
        }, err => {
          console.warn('Could not get issues', err);
        });
  }

  /* onSelect(issue: Issue): void {
    this.issues = issue;
    console.log(this.issues);
  } */

  goToDetails(issue:Issue):void {
    console.log(Issue);
    this.navCtrl.push(DetailsPage);
  }

}
