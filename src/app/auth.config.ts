import { AuthConfig } from 'angular-oauth2-oidc';

export const auth: AuthConfig = {
  issuer: 'https://accounts.google.com',///oauth2/auth',
  redirectUri: window.location.origin,
  clientId: '123190164932-714c2ba2dl1tmird481d8a12ae1ot18a.apps.googleusercontent.com',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false,
};