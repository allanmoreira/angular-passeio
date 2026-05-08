import { Component, OnInit } from '@angular/core';
import { LayoutProps } from './LayoutProps';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { AuthGoogleService } from '../../authgoogle/auth-google.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  props: LayoutProps = {
    titulo: '',
    subtitulo: '',
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authGoogleService: AuthGoogleService,
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter( () => this.activatedRoute.firstChild !== null),
      map( () => this.getLayoutProps())
    ).subscribe(() => {
      this.props = this.getLayoutProps();
    });
  }

  getLayoutProps(): LayoutProps {
    let childRoute = this.activatedRoute.firstChild;
    while (childRoute?.firstChild) {
      childRoute = childRoute.firstChild;
    }
    return childRoute?.snapshot.data as LayoutProps;
  }

  logout(){
    this.authGoogleService.logout();
  }
}
