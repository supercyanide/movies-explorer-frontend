import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function MoviesCard({movie, onButtonClick, savedMovie, onCardClick }){
    const location = useLocation();

    function handleClickLike(evt){
        evt.preventDefault()
        let btn = evt.target;
        onButtonClick(movie);
        btn.classList.toggle('card__like-button_active') 
        
    }
    function handleClickRemove(evt){
        evt.preventDefault();
        onButtonClick(movie);
    }
    function handleClick(){
        onCardClick(movie);
    }

    return(
        <li className='card'>
            <div className='card__trailer-link' >
                <img className='card__image' alt={movie.name} onClick={handleClick} src={movie.image}/>
            </div>
            <div className='card__block'>
                <div className='card__info'>
                    <h2 className='card__title'>{movie.name}</h2>
                    <p className='card__duration'>{movie.year}</p>
                </div>
                <button type='button' onClick={location.pathname === '/movies'? handleClickLike: handleClickRemove} 
                className={`card__button
                ${location.pathname === '/movies' && savedMovie ? "card__like-button_active": ""}
                ${location.pathname === '/movies' ? "card__like-button" : "card__remove-button"}
                `}></button>
            </div>
        </li>
    )
}