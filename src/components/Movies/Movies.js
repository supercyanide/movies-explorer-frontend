import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader'
import './Movies.css'


export default function Movies({onButtonClick, allMovies, savedMovies, onSearch, onCardClick, isPreloaderActive}){
    const localMovies = JSON.parse(localStorage.getItem('filter'));

    function handleSearch(){
        onSearch(localStorage.getItem('lastSearchValue'))
    }
    return(
        <main className='movies-page'>
            <SearchForm handleSearch={handleSearch}/>
            {isPreloaderActive 
                ? <Preloader/> 
                : <MoviesCardList
                    savedMovies={savedMovies}
                    movies={allMovies[0]??localMovies}
                    buttonClassName='card__like-button'
                    onButtonClick={onButtonClick}
                    onCardClick={onCardClick}
                />
            }
        </main>
        
    )
}

