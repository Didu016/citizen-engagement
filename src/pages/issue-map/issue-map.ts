import { FiltersComponent } from './../../components/components-filters/components-filters';
import { IssueListPage } from './../issue-list/issue-list';
import { IssueProvider } from './../../providers/providers-issue/providers-issue';
import { HttpClient } from '@angular/common/http';
import { config } from './../../app/config';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { latLng, Map, MapOptions, marker, Marker, tileLayer } from 'leaflet';
import { Headers } from '@angular/http';
import { PopoverController } from 'ionic-angular';

//Cicci 
import { AuthProvider } from '../../providers/auth/auth';
import { Geolocation } from '@ionic-native/geolocation';
import { Issue } from '../../models/issue/issue';
import { DetailsPage } from '../details/details';

/**
 * Generated class for the IssueMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-issue-map',
  templateUrl: 'issue-map.html',  
})
export class IssueMapPage {
  mapOptions: MapOptions;
  mapMarkers: Marker[];
  map: Map;
  issues: Issue[];

  
  goToDetails() {
    this.navCtrl.push(DetailsPage);
  }

  constructor(
              private auth: AuthProvider,
              public navCtrl: NavController, 
              public navParams: NavParams, 
              private geolocation: Geolocation,
              public issueProvider: IssueProvider,
              public popoverCtrl: PopoverController                          
              ) {
    const tileLayerUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tileLayerOptions = { maxZoom: 18 };
    this.mapOptions = {
      layers: [
        tileLayer(tileLayerUrl, tileLayerOptions)
      ],
      zoom: 16,
      center: latLng(46.778186, 6.641524)
    };
    this.mapMarkers=[];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IssueMapPage');   
    //Cicci
    const geolocationPromise = this.geolocation.getCurrentPosition();
    geolocationPromise.then(position => {
      const coords = position.coords;
      console.log(`User is at ${coords.longitude}, ${coords.latitude}`);
    }).catch(err => {
      console.warn(`Could not retrieve user position because: ${err.message}`);
    });

    this.issueProvider.getIssues().subscribe(HTTPissues => {
      this.issues = HTTPissues.body;
      this.issues.forEach(issue =>{
        this.generateMarker(issue).addTo(this.map);
      })
    });

  }

  onMapReady(map: Map) {
    this.map = map;
    this.map.on('moveend', () => {
      const center = this.map.getCenter();
      console.log(`Map moved to ${center.lng}, ${center.lat}`);
    });
  }

  //Gaved By Sami Othmane @https://github.com/samivnt/tango
  generateMarker(issue: Issue){
    return marker([issue.location.coordinates[1],issue.location.coordinates[0]]).bindTooltip(issue.description).on('click',()=>{
      console.log(issue);
      this.navCtrl.push(DetailsPage, issue);

    });
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(FiltersComponent);
    popover.present({
      ev: myEvent
    });
  }

  //Method to log out.
  logOut() {
    this.auth.logOut();
  }
}
