import { Component } from '@angular/core';
import { ProfileModel } from './profile.model';
import { Router } from '@angular/router';
import { AuthGoogleService } from '../authgoogle/auth-google.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  profile: ProfileModel | undefined;

  constructor(
    private router: Router,
    private authGoogleService: AuthGoogleService
  ) {}

  navegar(){
    this.router.navigate(['/paginas/galeria']);
  }

  loginGoogle(){
    this.authGoogleService.login();
  }

  isLoggedIn(): boolean{
    this.profile = this.authGoogleService.getProfile();
    console.log(this.profile);
    console.log(this.profile?.name);
    return !!this.profile;
  }
}
