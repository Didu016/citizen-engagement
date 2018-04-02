import { IssueCommentProvider} from './../../providers/providers-issue-comment/providers-issue-comment';
import { Issue } from './../../models/issue/issue';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommentariesPage } from '../commentaries/commentaries';

import { IssueProvider } from './../../providers/providers-issue/providers-issue';
import { HttpClient } from '@angular/common/http';
import { config } from './../../app/config';
import { IssueResponse } from '../../models/issue/issue-response';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  issue: IssueResponse;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private issueProvider: IssueProvider,
              private IssueCommentProvider: IssueCommentProvider) {
              this.issue = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
    console.log("en dessous l'issue");
    console.log(this.issue);     
  }

  displayCommentaries(issue :Issue) {
    this.navCtrl.push(CommentariesPage, issue);
  }

  getComments(issue: IssueResponse){
    this.IssueCommentProvider.getCommentsIssue(this.issue).subscribe(issueComments => {
      console.log('Issue comments loaded', issueComments);            
    }, err => {
      console.warn('Could not get issue types', err);
    });
  }

}
