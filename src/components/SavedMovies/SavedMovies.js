import React, { useEffect } from 'react';
import { useState } from 'react';
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useLocation } from 'react-router-dom';


export default function SavedMovies({onRemove}){
    const [savedMovies, setSavedMovies] = useState(JSON.parse(localStorage.getItem('savedMovies')))
    const [sortedMovies,setSortedMovies] = useState(savedMovies);

    const location = useLocation();
    
    useEffect(()=>{ 
        if(location.pathname ==='/saved-movies'){
            setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')))
        }
    },[location.pathname])
    
    function filter(value,checked){
        if (checked) {
          return savedMovies.filter((item) =>
            (((item.nameEN).toLowerCase().includes(value.toLowerCase())||(item.nameRU).toLowerCase().includes(value.toLowerCase())) && item.duration <=30)
          )
        }
        else {
            return (
                savedMovies.filter((item) => (item.nameEN).toLowerCase().includes(value.toLowerCase())||(item.nameRU).toLowerCase().includes(value.toLowerCase()))
            )
        }
    }

    function handleSavedSearch({value, isChecked}){
        if(Object.values(savedMovies).length){
            const sortedMovieSearch = filter(value, parseInt(isChecked));
            setSortedMovies(sortedMovieSearch);
        }
    }

    function handleRemove(movie){
        onRemove(movie);
        setSortedMovies(sortedMovies.filter((item) =>item.movieId!==movie.movieId))
    }
    
    return(
        <main className='saved-page'>
            <SearchForm
                handleSearch={handleSavedSearch}

            />
            <MoviesCardList
                movies={sortedMovies}
                buttonClassName='card__remove-button'
                isMoreButton={false}
                onButtonClick={handleRemove}
            />
        </main>
            
    )
}