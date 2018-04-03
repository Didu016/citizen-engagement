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
    public viewCtrl: ViewController) {
    console.log('Hello ComponentsFiltersComponent Component');
    console.log(this.navParams.data);
    this.allIssues = [];
    this.issueToSend = [];
  }

  sortBy(state: String){
    console.log(state);
    if (state === 'new' || state === 'inProgress' || state === 'rejected' || state === 'resolved'){      
      this.allIssues = this.navParams.data;
      this.allIssues.forEach(issue => {
        if(issue.state === state)
          this.issueToSend.push(issue);
      });
      console.log(this.issueToSend);
      this.viewCtrl.dismiss(this.issueToSend);
      
    }
    if (state === 'all' && this.allIssues.length != 0){
      console.log(this.allIssues);
      this.viewCtrl.dismiss(this.allIssues);
    }
    else if (state === 'all' && this.allIssues.length == 0){
      console.log(this.navParams.data);
      this.viewCtrl.dismiss();
    }                    
  }

}
