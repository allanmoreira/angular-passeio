import { CanActivateFn, Router } from '@angular/router';
import { AuthGoogleService } from './authgoogle/auth-google.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const loginService: AuthGoogleService = inject(AuthGoogleService);
  const router: Router = inject(Router);

  let profile = loginService.getProfile();

  if(profile)
    return true;

  router.navigate(['']);
  return false;
};
