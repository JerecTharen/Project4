import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {StartComponent} from "./start/start.component";
import {ScorecardComponent} from "./scorecard/scorecard.component";
import {SignUpComponent} from "./auth/signup/signup.component";

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'course-select', component: StartComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'scorecard/:id', component: ScorecardComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    )
  ]
})
export class AppRoutingModule { }
