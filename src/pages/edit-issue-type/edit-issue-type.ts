import { NgForm } from '@angular/forms';
import { IssueTypeProvider } from './../../providers/issue-type/providers-issue-type';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IssueTypeResponse } from '../../models/issue-type/issue-type-response';
import { IssueType } from '../../models/issue-type/issue-type';

/**
 * Generated class for the EditIssueTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-issue-type',
  templateUrl: 'edit-issue-type.html',
})
export class EditIssueTypePage {
  issueTypes: IssueTypeResponse;
  newIssueType: IssueType;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private IssueTypeProvider: IssueTypeProvider) {
      this.newIssueType = {
        name: '',
        description: ''        
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditIssueTypePage');

    //Load issue types
    this.IssueTypeProvider.getIssueType().subscribe(issueTypes => {
      console.log('Issue types loaded', issueTypes);
      this.issueTypes = issueTypes;      
    }, err => {
      console.warn('Could not get issue types', err);
    }); 
  }

  sendIssueType(form: NgForm){
    if (form.valid){
      console.log(this.newIssueType);
      console.log(form.value);
      this.IssueTypeProvider.addIssue(this.newIssueType);
    }
  }

}
