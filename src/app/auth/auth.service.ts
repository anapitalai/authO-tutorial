import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import auth0 from 'auth0-js';

@Injectable()
export class AuthService {
  auth0 = new auth0.WebAuth({
    clientID: '26w9-ylNhK5Gz3CBYzHCXYydZXiNmK9b',
    domain: 'nictconsultants.au.auth0.com',
    redirectUri: 'http://202.1.39.154:4200',
    responseType: 'token id_token',
    audience: 'https://nictconsultants.au.auth0.com/userinfo',
    scope: 'openid profile'
  });

  profile: any;
  constructor(public router: Router) { }
  login(): void {
    this.auth0.authorize();
  }

  //hash parsing
  handleAuthentication(
  ): void {
    this.auth0.parseHash((err, authResult) => {
      console.log(authResult);
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
          this.profile = profile;
          console.log(profile);
        })
        this.setSession(authResult);
        //this.fetchProfile(); 
        window.location.hash = '';
      }
      else if (err) { console.log(err); }
    });
  }

  //set session Method
  setSession(authResult): void {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  //checks if the user is authenticated or not
  isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
  logout(): void {
   // this.goHome();
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }
  fetchProfile(): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access Token is required for fetching profile image');
    }
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (err) {
        console.log(err);
        return;
      }
    })
  }
  goHome() {
    return this.router.navigate(['']);
  }
}
