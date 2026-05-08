import { Component } from '@angular/core';
import { ProfileModel } from './profile.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  profile: ProfileModel | undefined;

  constructor(private router: Router) {}

  navegar(){
    this.router.navigate(['/paginas/galeria']);
  }

  loginGoogle(){

  }

  isLoggedIn(): boolean{
    return !!this.profile;
  }
}
