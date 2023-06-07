import './MoviesCard.css';
import React from 'react';

export default function MoviesCard({imageUrl, name, duration}){
    return(
        <div className='card'>
            <img className='card__image' alt={name} src={imageUrl}/>
            <div className='card__block'>
            <div className='card__info'>
                <h3 className='card__title'>{name}</h3>
                <p className='card__duration'>{duration}</p>
            </div>
            <button className='card__like-button'></button>
            </div>
        </div>
    )
}