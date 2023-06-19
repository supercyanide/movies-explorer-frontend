import './MoviesCard.css';
import React from 'react';

export default function MoviesCard({imageUrl, name, duration, buttonClassName}){
    function setLike(evt){
        let btn = evt.target;
        if (btn.classList.contains('card__like-button')){
            btn.classList.toggle('card__like-button_active')
        }
    }
    return(
        <li className='card'>
            <img className='card__image' alt={name} src={imageUrl}/>
            <div className='card__block'>
            <div className='card__info'>
                <h3 className='card__title'>{name}</h3>
                <p className='card__duration'>{duration}</p>
            </div>
            <button onClick={setLike} className={`card__button ${buttonClassName}`}></button>
            </div>
        </li>
    )
}