import { IssueProvider } from './../../providers/providers-issue/providers-issue';
import { IssueType } from './../../models/issue-type/issue-type';
import { IssueTypeProvider } from './../../providers/issue-type/providers-issue-type';
import { Issue } from './../../models/issue/issue';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  tags = ['Broken','Light','Trouble'];

  constructor(    
    private auth: AuthProvider,    
    public http: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private camera: Camera,
    private pictureService: PictureProvider,
    private IssueTypeProvider: IssueTypeProvider,
    private IssueProvider: IssueProvider        
  ) {
    this.newIssue = {
      description: '',
      imageUrl: '',
      additionalImageUrls: '',
      issueTypeHref: '',
      location: {
        "type": "Point",
        "coordinates": [
            0,
            0
        ]
    },
      tags: this.tags,
    }
  }


  //Method to log out.
  logOut() {
    this.auth.logOut();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateIssuePage');
    console.log(this.newIssue);
    console.log(this.auth);

    //Load issue types
    this.IssueTypeProvider.getIssueType().subscribe(issueTypes => {
      console.log('Issue types loaded', issueTypes);
      this.issueTypes = issueTypes;      
    }, err => {
      console.warn('Could not get issue types', err);
    });    

    // const url = `${config.apiUrl}/issueTypes`;
    // this.http.get(url).subscribe(issueTypes => {
    //   console.log('Issue types loaded', issueTypes);
    // });
    
    //Get current positions and assign to issue
    const geolocationPromise = this.geolocation.getCurrentPosition();    
    geolocationPromise.then(position => {      
      const coords = position.coords;
      console.log(`User is at ${coords.latitude}, ${coords.longitude}`);
      this.newIssue.location = {
        "type": "Point",
        "coordinates": [
          coords.longitude,
          coords.latitude
        ]
    };
      console.log(this.newIssue.location);
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

  sendIssue(form: NgForm) {
    if (form.valid){
      console.log(this.newIssue);
      console.log(form.value);
      this.IssueProvider.addIssue(this.newIssue);
    }
  }

}
