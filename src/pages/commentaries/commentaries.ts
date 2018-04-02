import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

import { Issue } from '../../models/issue/issue';
import { IssueProvider } from './../../providers/providers-issue/providers-issue';
import { HttpClient } from '@angular/common/http';
import { config } from './../../app/config';
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
  issue: Issue;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private issueProvider: IssueProvider) {
              this.issue = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentariesPage');
  }

}
