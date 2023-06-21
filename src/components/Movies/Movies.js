import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { InitialMovies } from '../../utils/movies';
import SearchForm from '../SearchForm/SearchForm';

export default function Movies(){
    return(
        <main>
            <SearchForm/>
            <MoviesCardList
                InitialMovies={InitialMovies}
                buttonClassName='card__like-button'
                isMoreButton={true}
            />
        </main>
        
    )
}

