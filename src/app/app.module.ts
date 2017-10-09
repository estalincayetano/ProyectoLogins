import { LoginPage } from './../pages/login/login';
import { ServicioPage } from './../pages/servicio/servicio';
import { ListPage } from './../pages/list/list';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NotesService } from '../services/notes.service';
import {DetailPage} from '../pages/detail/detail';

import { AngularFireAuthModule } from 'angularfire2/auth';


import {AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyAYs6RFewT79yFz7Dk3CVsD8_kY88UsK28",
  authDomain: "logins-dc.firebaseapp.com",
  databaseURL: "https://logins-dc.firebaseio.com",
  projectId: "logins-dc",
  storageBucket: "logins-dc.appspot.com",
  messagingSenderId: "980514472111"
};

@NgModule({
  declarations: [
    MyApp,   
    DetailPage,
    ListPage,

    ServicioPage,
    LoginPage,
    HomePage
  
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    DetailPage,
    ListPage,
    ServicioPage,
    LoginPage,
    HomePage
  

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NotesService
  ]
})
export class AppModule {}
