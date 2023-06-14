import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { InitialSavedMovies } from '../../utils/movies';

export default function SavedMovies(){
    return(
        <div className='saved-movies'>
            <MoviesCardList
                InitialMovies={InitialSavedMovies}
                buttonClassName='card__remove-button'
                isMoreButton = {false}
            />
        </div>
    )
}