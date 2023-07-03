import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCardList.css';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';

import MoviesCard from '../MoviesCard/MoviesCard.js';

import useDimensions from '../../hooks/useDimentions';


export default function MoviesCardList({ movies, buttonClassName, isMoreButton, onButtonClick}){
    const { width } = useDimensions();
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));

    let defaultWidth;
    let offset;

    if (width >= 1280 ) {
        defaultWidth = 12;
        offset = 3;
    } else if (width >= 768) {
        defaultWidth = 8;
        offset = 2;
    } else if (width <= 480) {
        defaultWidth = 5;
        offset = 1;
    }
    const location = useLocation();

    const [endRange, setEndRange] = useState(defaultWidth);
    
    return(
        <section className='movies'>
            {
            ( movies === null)
            ? 
            <h2 className="movies-card-list__title">Фильмов не найдено</h2>
            :
            <ul className={`movies-card-list ${isMoreButton ? '' : 'movies-card-list_saved'}`}>
                {   
                    movies.slice(0, endRange).map((movie, i) => (
                        <MoviesCard
                            movie={movie}
                            key={i}
                            buttonClassName={buttonClassName}
                            onButtonClick={onButtonClick}
                            savedMovie={savedMovies? savedMovies.find(m => m.movieId === movie.movieId) : undefined}
                        />
                    ))
                }
            </ul>
            }
            {isMoreButton && movies && movies.length> 0 
                ? <LoadMoreButton 
                    className={movies.length <= endRange ? 'load-more-btn load-more-btn_hiden': 'load-more-btn'}
                    onClick={() => {
                        setEndRange(endRange + offset)
                    }} 
                /> 
                : (location.pathname ==='/movies') 
                    ? <h2 className="movies-card-list__title">Фильмов не найдено</h2>  
                    :''
            }
        </section>
    )
}