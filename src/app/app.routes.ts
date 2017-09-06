import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SvyComponent } from './svy/svy.component';
/**import { AuthGuardService as GuardDogs } from './auth/auth-guard.service';**/

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'SURVEY', component: SvyComponent/**, canActivate:[GuardDogs]**/ },
    { path: 'profile', component: ProfileComponent },
    { path: '**', redirectTo: '' }
]