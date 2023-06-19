import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { InitialMovies } from '../../utils/movies';

export default function Movies(){
    return(
        <MoviesCardList
            InitialMovies={InitialMovies}
            buttonClassName='card__like-button'
            isMoreButton={true}
        />
    )
}

