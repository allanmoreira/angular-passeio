import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lugar } from '../lugar.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LugarService {
  urlBase: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  salvar(lugar: Lugar) {
    return this.http.post<Lugar>(this.urlBase + 'lugares', lugar);
  }

  list(): Observable<Lugar[]> {
    return this.http.get<Lugar[]>(this.urlBase + 'lugares');
  }
}
