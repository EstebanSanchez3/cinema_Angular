import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { PieComponent } from './pie/pie.component';
import {HttpClientModule} from "@angular/common/http";
import { PeliculaComponent } from './pelicula/pelicula.component'

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ListadoPeliculasComponent,
    PieComponent,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
