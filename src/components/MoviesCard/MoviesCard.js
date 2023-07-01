import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';


export default function MoviesCard({movie, buttonClassName, onButtonClick, savedMovie }){


    const location = useLocation();


    function handleClick(evt){
        evt.preventDefault()
        let btn = evt.target;
        if (location.pathname === '/movies'){
            btn.classList.toggle('card__like-button_active')
            console.log(btn)
        }
        onButtonClick(movie);
    }

    function formatDuration(duration){
        const hours = Math.trunc(duration / 60);
        const minutes = duration % 60;
        return `${hours}ч ${minutes}м`;
    };

        return(
            <li className='card'>
                <a target='_blank' href={movie.trailerUrl} rel="noreferrer" className='card__trailer-link' >
                    <img className='card__image' alt={movie.nameRU} src={movie.image}/>
                </a>
                <div className='card__block'>
                    <div className='card__info'>
                        <h2 className='card__title'>{movie.nameRU}</h2>
                        <p className='card__duration'>{formatDuration(movie.duration)}</p>
                    </div>
                    <button type='button' onClick={handleClick} className={`card__button ${(location.pathname === "/movies" ? (savedMovie ? "card__like-button_active" : "card__like-button") : "card__remove-button" )}`}></button>
                </div>
            </li>
        )
}