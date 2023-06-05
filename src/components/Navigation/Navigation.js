import React from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';

export default function Navigation(){
    return(
        <div className='navigation'>
            <NavLink to='/movies' className='navigation__link navigation__link_movies'>Фильмы</NavLink>
            <NavLink to='/saved-movies' className='navigation__link'>Сохраненные фильмы</NavLink>
        </div>
    )

}