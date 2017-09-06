import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { AuthService} from './auth/auth.service';
import {ContactService} from './services/contact.service';
/**import { AuthGuardService } from './auth/auth-guard.service' **/
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SvyComponent } from './svy/svy.component';
import { AddcontactformComponent } from './addcontactform/addcontactform.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    SvyComponent,
    AddcontactformComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService,/**AuthGuardService,**/ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
