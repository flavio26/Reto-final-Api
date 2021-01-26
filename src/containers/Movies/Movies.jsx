import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie'
import './Movies.scss';

const Movies = props =>{
    const movieType = props.match.params.movieType;
    const [movies,setMovies] = useState([])

    let url = props.match.params.title;
    const listado = props.location.state;

    let path = '';
    let es_serie = 0;
    if(movieType === 'popular'){
        url = '¬¬¬€~#';
        path = `https://api.themoviedb.org/3/movie/${movieType}?api_key=f6c510b3b52b2f6efd5ed11ca30c9c4d&language=es-ES`;

    }else if(movieType === 'titulo'){
        let el_titulo = props.match.params.title;
        const replaced = el_titulo.split(' ').join('+');
        //console.log(replaced)
        path = `https://api.themoviedb.org/3/search/movie?api_key=f6c510b3b52b2f6efd5ed11ca30c9c4d&language=es-ES&page=1&include_adult=false&query=${replaced}`;

    }else if(movieType === 'genero'){
        let el_genero = props.match.params.title;
        const replaced = el_genero.split(' ').join('+')

        path = `https://api.themoviedb.org/3/discover/movie?api_key=f6c510b3b52b2f6efd5ed11ca30c9c4d&language=es-ES&page=1&include_adult=false&with_genres=${replaced}`
    }else if(movieType === 'serie'){
        let el_titulo = props.match.params.title;
        let replaced = 'undefined';
        if(el_titulo !== undefined){
            replaced = el_titulo.split(' ').join('+');
        }
        //console.log(replaced)
        path = `https://api.themoviedb.org/3/search/tv?api_key=f6c510b3b52b2f6efd5ed11ca30c9c4d&language=es-ES&page=1&include_adult=false&query=${replaced}` /*`https://api.themoviedb.org/3/discover/movie?api_key=f6c510b3b52b2f6efd5ed11ca30c9c4d&language=es-ES&page=1&include_adult=false&vote_count.gte=20000&sort_by=vote_count.desc`*/;
        es_serie = 1;
    }else if(movieType === 'votadas'){
        url = '@#~€€~@';
        path = `https://api.themoviedb.org/3/discover/movie?api_key=f6c510b3b52b2f6efd5ed11ca30c9c4d&language=es-ES&page=1&include_adult=false&vote_count.gte=10000&sort_by=vote_count.desc`;
    }

    useEffect(()=>{
        axios.get(path)
        .then(res =>{
            let datos = [];
            if(movieType === 'popular' || movieType === 'votadas'){
                const limit = 10;
                datos = res.data.results.slice(0, limit)
            }else{
                datos = res.data.results
            }
            setMovies(datos)})


        .catch(console.error)
    // eslint-disable-next-line
    },[url])

    return <div className="movies">
        {movies?.map(movie=><Movie key={movie.id} ser={es_serie} list={listado} movie={movie}/>)}
    </div>
}

export default Movies;