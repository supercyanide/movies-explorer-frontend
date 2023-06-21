import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { InitialSavedMovies } from '../../utils/movies';
import SearchForm from '../SearchForm/SearchForm';

export default function SavedMovies(){
    return(
        <main className='saved-movies'>
            <SearchForm/>
            <MoviesCardList
                InitialMovies={InitialSavedMovies}
                buttonClassName='card__remove-button'
                isMoreButton = {false}
            />
        </main>
            
    )
}