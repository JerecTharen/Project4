import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";
import { ScorecardComponent } from './scorecard/scorecard.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import { StartComponent } from './start/start.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AuthService} from "./auth/auth.service";
import { SignUpComponent } from './auth/signup/signup.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ScorecardComponent,
    StartComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
