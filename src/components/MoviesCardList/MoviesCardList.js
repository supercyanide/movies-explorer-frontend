import './MoviesCardList.css';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';

import MoviesCard from '../MoviesCard/MoviesCard.js';

export default function MoviesCardList({ InitialMovies = [], buttonClassName, isMoreButton}){
    return(
        <>
        <ul className={`movies ${isMoreButton ? '' : 'movies_saved'}`}>
            {InitialMovies.length === 0 ? <li className="movies-card-list__title">Фильмов не найдено</li>
            :   InitialMovies.map((movie) => (
                    <MoviesCard
                        imageUrl={movie.cover}
                        name={movie.name}
                        duration={movie.duration}
                        buttonClassName={buttonClassName}
                    />
                ))
            }
        </ul>
        {isMoreButton? <LoadMoreButton/> : ''}
        </>
    )
}