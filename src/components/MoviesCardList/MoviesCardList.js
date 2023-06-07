import './MoviesCardList.css';
import { movies } from '../../utils/movies';
import MoviesCard from '../MoviesCard/MoviesCard.js';

export default function MoviesCardList(){
    return(
        <>
        <section className='movies'>
            {
                movies.map((movie) => (
                    <MoviesCard
                        imageUrl={movie.cover}
                        name={movie.name}
                        duration={movie.duration}
                    />
                ))
            }
            
        </section>
        <div className='movies__more'>
            <button className='movies__more-btn'>Ещё</button>
        </div>
        </>
    )
}