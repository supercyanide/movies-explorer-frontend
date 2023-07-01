import './MoviesCardList.css';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';

import MoviesCard from '../MoviesCard/MoviesCard.js';
import { useEffect, useState } from 'react';

export default function MoviesCardList({ movies, buttonClassName, isMoreButton, onButtonClick}){

    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));

    return(
        <section className='movies'>
            {
            ( movies === null)
            ? 
            <h2 className="movies-card-list__title">Фильмов не найдено</h2>
            :
            <ul className={`movies-card-list ${isMoreButton ? '' : 'movies-card-list_saved'}`}>
                {   
                    movies.map((movie, i) => (
                        <MoviesCard
                            movie={movie}
                            key={i}
                            buttonClassName={buttonClassName}
                            onButtonClick={onButtonClick}
                            savedMovie={savedMovies? savedMovies.find(m => m.movieId === movie.movieId) : {}}
                        />
                    ))
                }
            </ul>
            }
            {/* {isMoreButton && movies.length>0 ? <LoadMoreButton/> : ''} */}
        </section>
    )
}