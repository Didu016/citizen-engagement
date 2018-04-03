import { AuthProvider } from './../../providers/auth/auth';
import { AuthInterceptorProvider } from './../../providers/auth-interceptor/auth-interceptor';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Other imports...
// TODO: import the new components.
import { CreateIssuePage } from '../create-issue/create-issue';
import { IssueMapPage } from '../issue-map/issue-map';
import { IssueListPage } from '../issue-list/issue-list';
import { EditIssueTypePage } from '../edit-issue-type/edit-issue-type';
import { User } from '../../models/user/user';

// TODO: add an interface to represent a tab.
export interface HomePageTab {
  title: string;
  icon: string;
  component: Function;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // TODO: declare a list of tabs to the component.
  tabs: HomePageTab[];
  user: User;

  constructor(public navCtrl: NavController,
              private auth: AuthProvider) 
              {
                this.setUser();
    // TODO: define some tabs.
    this.tabs = [
      { title: 'New Issue', icon: 'add', component: CreateIssuePage },
      { title: 'Issue Map', icon: 'map', component: IssueMapPage },
      { title: 'Issue List', icon: 'list', component: IssueListPage }      
    ];
    if(this.isStaff) this.tabs.push({ title: 'Edit Issue Type', icon: 'settings', component: EditIssueTypePage });
  }

  setUser(){
    this.auth.getUser().subscribe(user =>{
      this.user = user;
    })
  }

  isStaff() : boolean{
    if(!this.auth.isAuthenticated()){
      console.log("Pas authentifié !");
      return false;
    }else{
      return (this.user.roles.indexOf("staff") > -1);
    }
  }

}