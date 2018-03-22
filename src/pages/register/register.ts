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
  staff: boolean;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
                this.firstName = '';
                this.lastName = '';
                this.role = 'staff';
                this.staff = false;
                

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  updateRole(){
    if (this.staff)
      this.role = 'staff';
    else
      this.role = 'citizen';
  }

}
