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
import { HttpModule } from '@angular/http';

import {IonTagsInputModule} from "ionic-tags-input";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
import { CreateIssuePage } from '../pages/create-issue/create-issue';
import { CommentariesPage } from '../pages/commentaries/commentaries';
import { IssueListPage } from '../pages/issue-list/issue-list';
import { IssueMapPage } from '../pages/issue-map/issue-map';
import { AuthProvider } from '../providers/auth/auth';
import { DetailsPage } from '../pages/details/details';
import { EditIssueTypePage } from '../pages/edit-issue-type/edit-issue-type';
import { IntroPage } from '../pages/intro/intro';

import { AuthInterceptorProvider } from '../providers/auth-interceptor/auth-interceptor';
import { UserProvider } from '../providers/providers-user/providers-user';
import { IssueProvider } from '../providers/providers-issue/providers-issue';
import { PictureProvider } from '../providers/picture/picture';
import { IssueTypeProvider } from '../providers/issue-type/providers-issue-type';
import { IssueCommentProvider } from '../providers/providers-issue-comment/providers-issue-comment';
import { FiltersComponent } from '../components/components-filters/components-filters';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateIssuePage, // TODO: add the components to "declarations".
    CommentariesPage,
    IssueListPage,
    IssueMapPage,
    LoginPage,
    DetailsPage,
    RegisterPage,
    EditIssueTypePage,
    IntroPage,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    LeafletModule.forRoot(),
    IonTagsInputModule,
    FormsModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateIssuePage, // TODO: add the components to "entryComponents".
    CommentariesPage,
    IssueListPage,
    IssueMapPage,
    LoginPage,
    DetailsPage,
    RegisterPage,
    EditIssueTypePage,
    IntroPage,
    FiltersComponent
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,    
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorProvider, multi: true },
    Camera,
    UserProvider,
    IssueProvider,
    PictureProvider,
    IssueTypeProvider,
    IssueCommentProvider,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  exports: [
		IssueListPage
	]
})
export class AppModule {}
