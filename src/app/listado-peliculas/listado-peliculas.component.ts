import { Component, OnInit } from '@angular/core';
import { pelicula } from '../models/pelicula.model';
import { SPeliculasService } from '../services/s-peliculas.service';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {
  
  peliculas:pelicula[] = new Array<pelicula> () ;
  constructor(private serviciopeliculas:SPeliculasService) {

   }

  ngOnInit(): void {
    this.serviciopeliculas.getpelicula().subscribe (
      peliculas => {
      this.peliculas= peliculas ;
    })
  }

}
