import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { FormsModule } from '@angular/forms';

import {IonTagsInputModule} from "ionic-tags-input";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
import { CreateIssuePage } from '../pages/create-issue/create-issue';
import { IssueListPage } from '../pages/issue-list/issue-list';
import { IssueMapPage } from '../pages/issue-map/issue-map';
import { AuthProvider } from '../providers/auth/auth';
import { DetailsPage } from '../pages/details/details';

import { AuthInterceptorProvider } from '../providers/auth-interceptor/auth-interceptor';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateIssuePage, // TODO: add the components to "declarations".
    IssueListPage,
    IssueMapPage,
    LoginPage,
    DetailsPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    LeafletModule.forRoot(),
    IonTagsInputModule,
    FormsModule   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateIssuePage, // TODO: add the components to "entryComponents".
    IssueListPage,
    IssueMapPage,
    LoginPage,
    DetailsPage,
    RegisterPage
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,    
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorProvider, multi: true },
    Camera
  ]
})
export class AppModule {}
