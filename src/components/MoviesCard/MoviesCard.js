import './MoviesCard.css';
import React from 'react';

export default function MoviesCard({imageUrl, name, duration, trailerUrl, buttonClassName}){
    function setLike(evt){
        let btn = evt.target;
        if (btn.classList.contains('card__like-button')){
            btn.classList.toggle('card__like-button_active')
        }
    }
    return(
        <li className='card'>
            <a target='_blank' href={trailerUrl} rel="noreferrer" className='card__trailer-link' >
                <img className='card__image' alt={name} src={imageUrl}/>
            </a>
            <div className='card__block'>
            <div className='card__info'>
                <h2 className='card__title'>{name}</h2>
                <p className='card__duration'>{duration}</p>
            </div>
            <button type='button' onClick={setLike} className={`card__button ${buttonClassName}`}></button>
            </div>
        </li>
    )
}