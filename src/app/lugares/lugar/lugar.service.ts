import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Lugar } from '../lugar.class';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LugarService {
  urlBase: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  salvar(lugar: Lugar) {
    return this.http.post<Lugar>(this.urlBase + '/lugares', lugar);
  }

  list(): Observable<Lugar[]> {
    return this.http.get<Lugar[]>(this.urlBase + '/lugares');
  }

  filtrar(nome:string, categoria:string): Observable<Lugar[]> {
    let params = new HttpParams();
    if (nome) params = params.set('nome', nome);
    if (categoria && categoria !== '0') params = params.set('categoria', categoria);
    return this.http.get<Lugar[]>(this.urlBase + '/lugares', {
      params: params
    });
  }
}
