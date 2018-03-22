import { ProvidersUserProvider } from './../../providers/providers-user/providers-user';
import { config } from './../../app/config.sample';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { User } from './../../models/user/user';
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
              public navParams: NavParams,
              private userProvider: ProvidersUserProvider,
              private httpClient: HttpClient) {
                this.firstName = '';
                this.lastName = '';
                this.role = 'staff';
                this.staff = false;
                

  }

  ionViewDidLoad() {
    this.userProvider.getUser().subscribe(users => console.log(users));
  }

  updateRole(){
    if (this.staff)
      this.role = 'staff';
    else
      this.role = 'citizen';
  }

  postUser(){

  }

}
