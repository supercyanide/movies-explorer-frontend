import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader'
import './Movies.css'
import { useState } from 'react';
import {shortMoviesDuration} from '../../utils/consts'


export default function Movies({onButtonClick, allMovies, savedMovies, onSearch, onCardClick, isPreloaderActive}){
    const localMovies = JSON.parse(localStorage.getItem('filtered'));
    const [sortedMovies, setSortedMovies] = useState()

    function filter(value,checked){
        // setIsPreloaderActive(true);
        if (value===null) return
        if (checked) {
          return allMovies.filter((item) => 
            (((item.nameEN).toLowerCase().includes(value.toLowerCase())||(item.nameRU).toLowerCase().includes(value.toLowerCase())) && item.duration <= shortMoviesDuration)
          )
        }
        else return allMovies.filter((item) => (item.nameEN).toLowerCase().includes(value.toLowerCase())||(item.nameRU).toLowerCase().includes(value.toLowerCase()))
    }

    function handleSearch(){
        onSearch(localStorage.getItem('lastSearchValue'))
        // const value = localStorage.getItem('lastSearchValue');
        // const isChecked = localStorage.getItem('lastCheckboxValue');
        // const sortedMovieSearch = filter(value, parseInt(isChecked));
        // if (sortedMovieSearch) {
        //     localStorage.setItem('filtered', JSON.stringify(sortedMovieSearch));
        //     setSortedMovies(sortedMovieSearch);
        // }
        // setIsPreloaderActive(false);
    }
    function handleCheckboxSearch(checkboxValue){
        const value = localStorage.getItem('lastSearchValue');
        const sortedMovieSearch = filter(value,checkboxValue);
        if (sortedMovieSearch) {
            localStorage.setItem('filtered', JSON.stringify(sortedMovieSearch));
            setSortedMovies(sortedMovieSearch);
        }
        // setIsPreloaderActive(false);

    }

    return(
        <main className='movies-page'>
            <SearchForm handleSearch={handleSearch} handleCheckboxSearch={handleCheckboxSearch}/>
            {isPreloaderActive 
                ? <Preloader/> 
                : <MoviesCardList
                    savedMovies={savedMovies}
                    movies={allMovies??localMovies}
                    buttonClassName='card__like-button'
                    onButtonClick={onButtonClick}
                    onCardClick={onCardClick}
                />
            }
        </main>
        
    )
}

