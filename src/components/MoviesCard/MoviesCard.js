import './MoviesCard.css';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/currentUserContext';


export default function MoviesCard({movie, buttonClassName, onButtonClick, savedMovie }){
    console.log(savedMovie)
    const currentUser = useContext(CurrentUserContext);
    
    let isLiked;
    if(savedMovie){
        if (savedMovie.owner._id === currentUser._id){
            isLiked= true;
        }
        else {
            isLiked = false
        }
    }

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
                    <button type='button' onClick={location.pathname === '/movies'? handleClickLike: handleClickRemove} 
                    className={`card__button
                    ${location.pathname === '/movies' && isLiked? "card__like-button_active": ""}
                    ${location.pathname === '/movies' ? "card__like-button" : "card__remove-button"}
                    `}></button>
                </div>
            </li>
        )
}