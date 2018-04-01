import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Issue } from '../../models/issue/issue';
import { IssueProvider } from './../../providers/providers-issue/providers-issue';
import { HttpClient } from '@angular/common/http';
import { config } from './../../app/config';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
