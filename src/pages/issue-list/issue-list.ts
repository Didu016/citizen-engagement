import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { DetailsPage } from '../details/details';

import { HttpClient } from '@angular/common/http';
import { config } from './../../app/config';
import { IssueProvider } from './../../providers/providers-issue/providers-issue';
import { Issue } from '../../models/issue/issue';
import { AuthProvider } from '../../providers/auth/auth';

import { NgModule } from '@angular/core';


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

  constructor(private auth: AuthProvider,
              public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient,
              public issueProvider: IssueProvider) {
              this.doRefresh(0);
  }
  doRefresh(refresher) {
    this.issueProvider.getIssues().subscribe(HTTPissues => {
      console.log(HTTPissues);
      this.issues = HTTPissues.body;
    }, err => {
      console.warn('Could not get issues', err);
    });
    if(refresher !=0)
      refresher.complete();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IssueListPage');
    //Load Issue
    this.getIssuesList();
              
  }
  
  getIssuesList(){
    this.issueProvider.getIssues().subscribe(HTTPissues => {
      console.log(HTTPissues);
      this.issues = HTTPissues.body;
    }, err => {
      console.warn('Could not get issues', err);
    });
  }
  
  goToDetails(issue :Issue) {
    this.navCtrl.push(DetailsPage, issue);
  }

  //Method to log out.
  logOut() {
    this.auth.logOut();
  }

}
