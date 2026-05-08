import { Injectable, signal, inject } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { auth } from '../auth.config';

@Injectable({
  providedIn: 'root',
})
export class AuthgoogleService {
  private oauthservice: OAuthService = inject(OAuthService);
  private router: Router = inject(Router);
  profile = signal<any>(null);

  constructor() {
    this.initConfiguration();
  }

  initConfiguration(){
    this.oauthservice.configure(auth);
    this.oauthservice.setupAutomaticSilentRefresh();
    this.oauthservice.loadDiscoveryDocumentAndTryLogin().then(() => {
      if(this.oauthservice.hasValidIdToken()){
        this.profile.set(this.oauthservice.getIdentityClaims())
      }
    });
  }

  login(){
    this.oauthservice.initImplicitFlow();
  }

  logout(){
    this.oauthservice.revokeTokenAndLogout();
    this.oauthservice.logOut();
    this.profile.set(null)
    this.router.navigate(['']);
  }

  getProfile(){
    return this.profile();
  }
}
