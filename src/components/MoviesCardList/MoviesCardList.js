import './MoviesCardList.css';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';

import MoviesCard from '../MoviesCard/MoviesCard.js';

export default function MoviesCardList({ InitialMovies = [], buttonClassName, isMoreButton}){
    return(
        <section className='movies'>
            {InitialMovies.length === 0 ? <h2 className="movies-card-list__title">Фильмов не найдено</h2>
            :
            <ul className={`movies-card-list ${isMoreButton ? '' : 'movies-card-list_saved'}`}>
                {
                    InitialMovies.map((movie, i) => (
                        <MoviesCard
                            key={i}
                            imageUrl={movie.cover}
                            name={movie.name}
                            duration={movie.duration}
                            trailerUrl={movie.trailerUrl}
                            buttonClassName={buttonClassName}
                        />
                    ))
                }
            </ul>
            }
            {isMoreButton && InitialMovies.length>0 ? <LoadMoreButton/> : ''}
        </section>
    )
}