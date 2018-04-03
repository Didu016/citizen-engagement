import { NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

import { IssueProvider } from './../../providers/providers-issue/providers-issue';

import { IssueResponse } from './../../models/issue/issue-response';

/**
 * Generated class for the FiltersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'components-filters',
  templateUrl: 'components-filters.html'
})
export class FiltersComponent {

  allIssues: IssueResponse[];
  issueToSend: IssueResponse[];

  constructor(private navController: NavController, 
    private navParams: NavParams,
    public viewCtrl: ViewController,
    private IssueProvider: IssueProvider) {
    console.log('Hello ComponentsFiltersComponent Component');
    console.log(this.navParams.data);    
  }

  ionViewDidLoad() {
    console.log('Hello ionViewDidLoad');
    this.IssueProvider.getIssues().subscribe(HTTPissues => {
      console.log(HTTPissues);
      this.allIssues = HTTPissues.body;
      console.log("allIssuesFirst", this.allIssues);
    }, err => {
      console.warn('Could not get issues', err);
    });
  }

  sortBy(state: String){
    this.issueToSend = [];    
    console.log(state);
    if (state === 'new' || state === 'inProgress' || state === 'rejected' || state === 'resolved'){            
      this.allIssues.forEach(issue => {
        if(issue.state === state)
          this.issueToSend.push(issue);
      });
      console.log("issuetoSend",this.issueToSend);
      this.viewCtrl.dismiss(this.issueToSend);
      
    }
    if (state === 'all' && this.allIssues.length != 0){
      console.log("allIssues",this.allIssues);
      this.viewCtrl.dismiss(this.allIssues);
    }
    else if (state === 'all' && this.allIssues.length == 0){
      console.log("navParamsdata",this.navParams.data);
      this.viewCtrl.dismiss();
    }                    
  }

}
