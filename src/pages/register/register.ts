import { UserProvider } from './../../providers/providers-user/providers-user';
import { config } from './../../app/config.sample';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { User } from './../../models/user/user';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

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
  user: User;
  staff: boolean;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private userProvider: UserProvider,
              private httpClient: HttpClient) {
                this.user = {
                  name: '',    
                  password: '',
                  firstname: '',
                  lastname: '',
                  phone: '',
                  roles: ['citizen']
                }
                this.staff = false;
                

  }

  ionViewDidLoad() {
    console.log("ViewDidLoad registerPage");    
  }

  updateRole(){
    if (this.staff){      
      this.user.roles.push('staff');
    }      
    else{
      this.user.roles = ['citizen'];
    }    
      
  }

  sendUser(form: NgForm){
    if (form.valid){
      console.log(this.user);
      console.log(form.value);
      this.userProvider.addUser(this.user).subscribe(user => {
        console.log(user);      
      }, err => {
        console.warn('Could not get issue types', err);
      });  
    }

  }

}
