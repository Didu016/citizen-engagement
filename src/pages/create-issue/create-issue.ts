import { IssueType } from './../../models/issue-type/issue-type';
import { IssueTypeProvider } from './../../providers/issue-type/providers-issue-type';
import { Issue } from './../../models/issue/issue';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { config } from '../../app/config';
import { Geolocation } from '@ionic-native/geolocation';
import { NgForm } from '@angular/forms';


// Other imports...
// TODO: import the authentication provider and login page.
import { AuthProvider } from '../../providers/auth/auth';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { QimgImage } from '../../models/qimg/qimg-image';
import { PictureProvider } from '../../providers/picture/picture';


/**
 * Generated class for the CreateIssuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-issue',
  templateUrl: 'create-issue.html',
})

export class CreateIssuePage {
  pictureData: string;
  picture: QimgImage;
  newIssue: Issue;  
  issueTypes: IssueType;

  tags = ['Broken','Missing','Trouble','Light','Door'];

  constructor(    
    private auth: AuthProvider,    
    public http: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private camera: Camera,
    private pictureService: PictureProvider,
    private IssueTypeProvider: IssueTypeProvider
  ) {
    this.newIssue = {
      description: '',
      imageUrl: '',
      issueTypeHref: '',
      latitude: 0,
      longitude: 0,
      tags: this.tags,
      user: ''
    }
  }


  // TODO: add a method to log out.
  logOut() {
    this.auth.logOut();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateIssuePage');

    //Load issue types
    this.IssueTypeProvider.getIssueType().subscribe(issueTypes => {
      console.log('Issue types loaded', issueTypes);
      this.issueTypes = issueTypes;      
    }, err => {
      console.warn('Could not get issue types', err);
    });

    // // TODO: replace the hardcoded API URL by the one from the configuration.
    // const url = `${config.apiUrl}/issueTypes`;
    // this.http.get(url).subscribe(issueTypes => {
    //   console.log('Issue types loaded', issueTypes);
    // });

    const geolocationPromise = this.geolocation.getCurrentPosition();
    geolocationPromise.then(position => {
      const coords = position.coords;
      console.log(`User is at ${coords.latitude}, ${coords.longitude}`);
    }).catch(err => {
      console.warn(`Could not retrieve user position because: ${err.message}`);
    });    
  }

  takePicture() {
    //Changer avec take picture tu qimg
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then(pictureData => {
      this.pictureData = pictureData;
    }).catch(err => {
      console.warn(`Could not take picture because: ${err.message}`);
    });
  }

  sendIssue() {
    //Load issue types
    this.IssueTypeProvider.getIssueType().subscribe(issueTypes => {
      console.log(issueTypes);      
    }, err => {
      console.warn('Could not get issue types', err);
    });
  }

}
