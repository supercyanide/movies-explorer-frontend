import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCardList.css';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';

import MoviesCard from '../MoviesCard/MoviesCard.js';

import useDimensions from '../../hooks/useDimentions';


export default function MoviesCardList({ movies, buttonClassName, onButtonClick, savedMovies}){
    const { width } = useDimensions();

    let defaultWidth = 5;
    let offset = 1;

    if (width >= 1280 ) {
        defaultWidth = 12;
        offset = 3;
    } else if (width >= 768) {
        defaultWidth = 8;
        offset = 2;
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
            <ul className={`movies-card-list ${location.pathname ==='/saved-movies' ? '' : 'movies-card-list_saved'}`}>
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
            {location.pathname ==='/movies' && movies && movies.length> 0 
                ? <LoadMoreButton 
                    className={movies.length <= endRange ? 'load-more-btn load-more-btn_hiden': 'load-more-btn'}
                    onClick={() => {
                        setEndRange(endRange + offset)
                    }} 
                /> 
                : ""
            }
            {location.pathname ==='/saved-movies' && (Array.isArray(movies)&&(!movies.length))
            ? <h2 className="movies-card-list__title">Фильмов не найдено</h2>
            :""
            }
            
        </section>
    )
}