export class pelicula {
    identificador:number ;
    titulo:string ;
    sinopsis:string ;
    anio_estreno:number ;
    imagen:string ;
    video:string ;
    constructor(identificador:number, titulo:string, sinopsis:string, anio_estreno:number, imagen:string, video:string){
        this.identificador=identificador ;
        this.titulo=titulo ;
        this.sinopsis=sinopsis ;
        this.anio_estreno=anio_estreno ;
        this.imagen=imagen ;
        this.video=video ;

    }
}