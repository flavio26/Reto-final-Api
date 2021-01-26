import React from "react";
import './Movie.scss';

const Movie = /*({movie})*/props => {

    let generos = props.movie.genre_ids;

    let seri = props.ser;

    let total_generos = '';

    let j=0;
    let bandera = 0;

    for(let i=0;i<props.list.length;i++){
        for(j=0; j<generos.length;j++){
            if(props.list[i].id === generos[j]){
                total_generos += props.list[i].name + ' - ';
                bandera++;
            }
        }
        j=0;
    }

    if(bandera !== 0){
        total_generos = total_generos.slice(0,-2)
    }

    return <div className="movie">
        <center><h2>{seri === 0 ? props.movie.title : props.movie.name}</h2></center>
        <center><h3>{seri === 0 ? props.movie.original_title : props.movie.original_name}</h3></center>
        <p><strong>Fecha de lanzamiento:</strong> {seri === 0 ? props.movie.release_date: props.movie.first_air_date}</p>
        <img src={"http://image.tmdb.org/t/p/w200" + props.movie.poster_path} alt=""/>
        <p><strong>Sinopsis:</strong> {props.movie.overview}</p>
        <p><strong>Género:</strong> {total_generos}</p>
        <p><strong>Nº votos:</strong> {props.movie.vote_count}</p>
    </div>
}
export default Movie;