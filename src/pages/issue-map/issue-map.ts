import { IssueProvider } from './../../providers/providers-issue/providers-issue';
import { HttpClient } from '@angular/common/http';
import { config } from './../../app/config';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { latLng, Map, MapOptions, marker, Marker, tileLayer } from 'leaflet';

//Cicci 
import { Geolocation } from '@ionic-native/geolocation';
import { Issue } from '../../models/issue/issue';

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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private geolocation: Geolocation,
              public http: HttpClient,
              public issueProvider: IssueProvider,) {
    const tileLayerUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tileLayerOptions = { maxZoom: 18 };
    this.mapOptions = {
      layers: [
        tileLayer(tileLayerUrl, tileLayerOptions)
      ],
      zoom: 16,
      center: latLng(46.778186, 6.641524)
    };

    this.mapMarkers = [
      marker([ 46.778186, 6.641524 ]).bindTooltip('Hello'),
      marker([ 46.780796, 6.647395 ]),
      marker([ 46.784992, 6.652267 ])
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IssueMapPage');

    //Load issues
    this.issueProvider.getIssues().subscribe(issues => {
      console.log(issues);
      this.issues = issues;
    }, err => {
      console.warn('Could not get issues', err);
    });
    

    //Cicci
    const geolocationPromise = this.geolocation.getCurrentPosition();
    geolocationPromise.then(position => {
      const coords = position.coords;
      console.log(`User is at ${coords.longitude}, ${coords.latitude}`);
    }).catch(err => {
      console.warn(`Could not retrieve user position because: ${err.message}`);
    });
  }

  onMapReady(map: Map) {
    this.map = map;
    this.map.on('moveend', () => {
      const center = this.map.getCenter();
      console.log(`Map moved to ${center.lng}, ${center.lat}`);
    });
  }

}
