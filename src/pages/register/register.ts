import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  firstName: string;
  lastName: string;
  role: string;
  manager: boolean;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
                this.firstName = '';
                this.lastName = '';
                this.role = 'citizen';
                this.manager = false;
                

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  updateRole(){
    if (this.manager)
      this.role = 'manager';
    else
      this.role = 'citizen';
  }

}
