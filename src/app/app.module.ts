import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './ui/shared/shared.module';

const firebaseConfig = {
  apiKey: "AIzaSyANG4jQN9Y_jRERvBcKUEEZkXI5JBMMvq8",
  authDomain: "finapp-7c081.firebaseapp.com",
  projectId: "finapp-7c081",
  storageBucket: "finapp-7c081.appspot.com",
  messagingSenderId: "732122862069",
  appId: "1:732122862069:web:44603c52568cc5d892d0bc",
  measurementId: "G-TN91SX8275"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
