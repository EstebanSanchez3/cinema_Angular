import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pelicula } from '../models/pelicula.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SPeliculasService {

  peliculas: Observable<pelicula[]> = new Observable();

  constructor(private clienteHttp: HttpClient) {
  }

  getpelicula(): Observable<pelicula[]> {
    console.log("Obteniendo peliculas del ws");
    this.peliculas = this.clienteHttp.get<pelicula[]>("http://localhost:8080/peliculas")
    return this.peliculas
  }
}

