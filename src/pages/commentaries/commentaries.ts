import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { Issue } from '../../models/issue/issue';
import { IssueCommentProvider} from './../../providers/providers-issue-comment/providers-issue-comment';
import { IssueProvider } from './../../providers/providers-issue/providers-issue';
import { IssueResponse } from '../../models/issue/issue-response';
import { HttpClient } from '@angular/common/http';
import { config } from './../../app/config';
import { NgForm } from '@angular/forms';
import { IssueComments } from '../../models/issue-comments/issue-comments';
/**
 * Generated class for the CommentariesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-commentaries',
  templateUrl: 'commentaries.html',
})
export class CommentariesPage {
  issue: IssueResponse;
  issueComments:IssueComments[];
  newComment: IssueComments; 
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private issueProvider: IssueProvider,
              private IssueCommentProvider: IssueCommentProvider) {
              this.issue = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentariesPage');
    console.log(this.issue);
    this.getComments(this.issue);
  }

  getComments(issue: IssueResponse){
    this.IssueCommentProvider.getCommentsIssue(this.issue).subscribe(issueComments => {
      console.log('Issue comments loaded', issueComments);
      this.issueComments = issueComments;
    }, err => {
      console.warn('Could not get issue types', err);
    });  
  }

  addCommentsIssue(form: NgForm) {
    if (form.valid){
      console.log(this.newComment);
      console.log(form.value);
      this.IssueCommentProvider.addCommentsIssue(this.newComment,this.issue);
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }
  }

}
