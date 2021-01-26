import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

const Menu = props =>{
    const [titulo, setTitulo] = useState();
    const [genero, setGenero] = useState('28');
    const [listado, setListado] = useState([]);
    const [serie, setSerie] = useState();

    const handleChangeT = e => {
        setTitulo(e.target.value) 
    }

    const handleChangeG = e => {
        setGenero(e.target.value) 
    }

    const handleChangeS = e => {
        setSerie(e.target.value) 
    }

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=f6c510b3b52b2f6efd5ed11ca30c9c4d&language=es-ES`)
        .then(res => setListado(res.data.genres))
        .catch(console.error)
    });

    let url_titulo = '';

    if(titulo !== ''){
        url_titulo = `/titulo/${titulo}`; 
    }else{
        url_titulo = `/titulo/undefined`;
    }
    let url_genero = `/genero/${genero}`; 

    

    return <div className="main">
                <div className="menu">
                    <NavLink to={{
                        pathname:'/popular',
                        state: listado        
                }}>
                        <span className="populares">10 + Populares</span>
                    </NavLink>
                    <NavLink to={{
                        pathname:'/votadas',
                        state: listado        
                    }}>
                        <span className="votadas">10 + Votadas</span>
                    </NavLink>
                    <div>
                        <input type="text" id="titulo" placeholder="Indica el título..." value={titulo} onChange={handleChangeT} />
                        <NavLink to={{
                            pathname: url_titulo,
                            state: listado
                        }}>
                            <span className="titulo">Buscar Película</span>
                        </NavLink>
                    </div>
                    <div>
                        <select onChange={handleChangeG}>
                            {listado?.map(cat=><option key={cat.id} value={cat.id}>{cat.name}</option>)}
                        </select>
                        <NavLink to={{
                            pathname: url_genero,
                            state: listado
                        }}>
                            <span className="genero">Buscar Película</span>
                        </NavLink>                      
                    </div>
                    <div id="containerseries">
                        <input type="text" id="serie" placeholder="Indica el título..." value={serie} onChange={handleChangeS} />
                        <NavLink to={{
                            pathname: '/serie/' + serie,
                            state: listado
                        }}>
                            <span className="serie">Buscar Serie</span>
                        </NavLink> 
                    </div>
                </div>
            </div>
}

export default Menu;