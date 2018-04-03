import { Issue } from './../../models/issue/issue';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommentariesPage } from '../commentaries/commentaries';

import { IssueProvider } from './../../providers/providers-issue/providers-issue';
import { HttpClient } from '@angular/common/http';
import { config } from './../../app/config';
import { IssueResponse } from '../../models/issue/issue-response';
import { AuthProvider } from '../../providers/auth/auth';

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

  constructor(private auth: AuthProvider,
              public navCtrl: NavController,
              public navParams: NavParams,
              private issueProvider: IssueProvider) {
              this.issue = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  displayCommentaries(issue :Issue) {
    this.navCtrl.push(CommentariesPage, issue);
  }
    
  //Method to log out.
  logOut() {
    this.auth.logOut();
  }
}
