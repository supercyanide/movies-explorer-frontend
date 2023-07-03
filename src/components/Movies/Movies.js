import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader'
import './Movies.css'
import { useState } from 'react';


export default function Movies({onButtonClick, allMovies, savedMovies}){
    const [isPreloaderActive, setIsPreloaderActive] = useState(false);
    const localMovies = JSON.parse(localStorage.getItem('filtered'));
    const [sortedMovies, setSortedMovies] = useState()

    function filter(value,checked){
        setIsPreloaderActive(true);
        if (checked) {
          return allMovies.filter((item) => 
            (((item.nameEN).toLowerCase().includes(value.toLowerCase())||(item.nameRU).toLowerCase().includes(value.toLowerCase())) && item.duration <=40)
          )
        }
        else return allMovies.filter((item) => (item.nameEN).toLowerCase().includes(value)||(item.nameRU).toLowerCase().includes(value))
    }

    function handleSearch(evt){
        const value = localStorage.getItem('lastSearchValue');
        const isChecked = localStorage.getItem('lastCheckboxValue');
        const sortedMovieSearch = filter(value, parseInt(isChecked));
        localStorage.setItem('filtered', JSON.stringify(sortedMovieSearch));
        setSortedMovies(sortedMovieSearch);
        setIsPreloaderActive(false);
    }
    function handleCheckboxSearch(checkboxValue){
        const value = localStorage.getItem('lastSearchValue');
        const sortedMovieSearch = filter(value,checkboxValue);
        localStorage.setItem('filtered', JSON.stringify(sortedMovieSearch));
        setSortedMovies(sortedMovieSearch);
        setIsPreloaderActive(false);

    }

    return(
        <main className='movies-page'>
            <SearchForm handleSearch={handleSearch} handleCheckboxSearch={handleCheckboxSearch}/>
            {isPreloaderActive 
                ? <Preloader/> 
                : <MoviesCardList
                    movies={sortedMovies??localMovies}
                    buttonClassName='card__like-button'
                    isMoreButton={true}
                    onButtonClick={onButtonClick}

                />
            }
        </main>
        
    )
}

