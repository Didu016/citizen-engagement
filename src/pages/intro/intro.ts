import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreateIssuePage } from '../../pages/create-issue/create-issue';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navHome() {
    this.navCtrl.setRoot(CreateIssuePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

}
