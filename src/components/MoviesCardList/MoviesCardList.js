import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCardList.css';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';

import MoviesCard from '../MoviesCard/MoviesCard.js';

import useDimensions from '../../hooks/useDimentions';
import {mobileDefaultWidth, tabletDefaultWidth, desktopDefaultWidth, mobileOffset, tabletOffset, desktopOffset, desktopWidth, tabletWidth} from '../../utils/consts'

export default function MoviesCardList({ movies, buttonClassName, onButtonClick, savedMovies, onCardClick}){
    const location = useLocation();
    const searchedMovies = JSON.parse(localStorage.getItem('filter'))||[]
    const { width } = useDimensions();

    let defaultWidth = mobileDefaultWidth;
    let offset = mobileOffset;

    if (width >= desktopWidth ) {
        defaultWidth = desktopDefaultWidth;
        offset = desktopOffset;
    } else if (width >= tabletWidth) {
        defaultWidth = tabletDefaultWidth;
        offset = tabletOffset;
    }
    
    const [endRange, setEndRange] = useState(defaultWidth);
    return(
        <section className='movies'>
            {
            ( searchedMovies == null)||(movies==null)
            ? 
            <h2 className="movies-card-list__title">Фильмов не найдено</h2>
            :
            <ul className={`movies-card-list ${location.pathname ==='/saved-movies' ? '' : 'movies-card-list_saved'}`}>
                {   location.pathname ===('/movies')?
                    searchedMovies.slice(0, endRange).map((movie, i) => (
                        <MoviesCard
                            movie={movie}
                            key={i}
                            onCardClick={onCardClick}
                            buttonClassName={buttonClassName}
                            onButtonClick={onButtonClick}
                            savedMovie={savedMovies? savedMovies.find(m => m.movieId === movie.movieId) : undefined}
                        />
                    ))
                    :
                    movies.slice(0, endRange).map((movie, i) => (
                        <MoviesCard
                            movie={movie}
                            key={i}
                            onCardClick={onCardClick}
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
            {
            (Array.isArray(movies)&&(!movies.length))
            ? <h2 className="movies-card-list__title">Фильмов не найдено</h2>
            :""
            }
            
        </section>
    )
}