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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient,
              public issueProvider: IssueProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IssueListPage');
        //Load Issue
        this.issueProvider.getIssues().subscribe(HTTPissues => {
          console.log(HTTPissues.body);
          this.issues = HTTPissues.body;
        }, err => {
          console.warn('Could not get issues', err);
        });
  }
  
  goToDetails(issue :Issue) {
    this.navCtrl.push(DetailsPage, issue);
  }

}
