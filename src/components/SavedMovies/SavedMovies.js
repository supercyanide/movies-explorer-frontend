import React, { useEffect } from 'react';
import { useState } from 'react';
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useLocation } from 'react-router-dom';


export default function SavedMovies({ onRemove, savedMovies, setSavedMovies }){
    const [sortedMovies,setSortedMovies] = useState(savedMovies);
    const [lastSearchValue, setLastSearchValue] = useState('');

    const location = useLocation();
    
    useEffect(()=>{ 
        if(location.pathname ==='/saved-movies'){
            setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')))
        }
    },[location.pathname])
    
    function filter(value,checked){
        console.log(checked)
        if (value && checked) {
          return savedMovies.filter((item) =>
            ((((item.nameEN).toLowerCase()).includes(value.toLowerCase())||((item.nameRU).toLowerCase()).includes(value.toLowerCase())) && item.duration <=40)
          )
        }
        else if(!checked) {
            return (
                savedMovies.filter((item) => (((item.nameEN).toLowerCase()).includes(value.toLowerCase()))||(((item.nameRU).toLowerCase()).includes(value.toLowerCase())))
            )
        }
    }

    function handleSavedSearch({value, isChecked}){
        setLastSearchValue(value);
        if(savedMovies){
            const sortedMovieSearch = filter(value, parseInt(isChecked));
            setSortedMovies(sortedMovieSearch);
        }
    }

    function handleCheckboxSearch(checkboxValue){
        if (lastSearchValue){
            const sortedMovieSearch = filter(lastSearchValue, checkboxValue);
            if (sortedMovieSearch) setSortedMovies(sortedMovieSearch)
            
        }
        else return
        
    }

    function handleRemove(movie){
        onRemove(movie);
        setSortedMovies(sortedMovies.filter((item) =>item.movieId!==movie.movieId))
    }
    
    return(
        <main className='saved-page'>
            <SearchForm
                handleSearch={handleSavedSearch}
                handleCheckboxSearch={handleCheckboxSearch}

            />
            <MoviesCardList
                movies={sortedMovies}
                buttonClassName='card__remove-button'
                onButtonClick={handleRemove}
            />
        </main>
            
    )
}