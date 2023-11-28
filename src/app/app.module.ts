import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DoctorComponent } from './components/dashboard/doctor/doctor.component';
import { PatientComponent } from './components/dashboard/patient/patient.component';
import { SideBarComponent } from './components/dashboard/side-bar/side-bar.component';
import { MaterialModule } from './material/material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DoctorComponent,
    PatientComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
