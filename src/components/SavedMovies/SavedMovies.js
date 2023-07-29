import React, { useEffect } from 'react';
import { useState } from 'react';
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useLocation } from 'react-router-dom';


export default function SavedMovies({ onRemove, savedMovies, setSavedMovies, onCardClick}){
    const [sortedMovies, setSortedMovies] = useState(savedMovies);
    const [lastSearchValue, setLastSearchValue] = useState('');

    useEffect(()=> {
        setSortedMovies(savedMovies);
    },[savedMovies])


    const location = useLocation();
    
    useEffect(()=>{ 
        if(location.pathname ==='/saved-movies'){
            setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')))
        }
    },[location.pathname])
    

    function handleSavedSearch({savedValue}){
        setLastSearchValue(savedValue);
        // if(savedMovies){
        //     const sortedMovieSearch = filter(savedValue);
        //     setSortedMovies(sortedMovieSearch);
        // }
    }

    function handleRemove(movie){
        onRemove(movie);
        setSortedMovies(sortedMovies.filter((item) =>item.movieId!==movie.movieId))
    }
    
    return(
        <main className='saved-page'>
            <SearchForm
                handleSavedSearch={handleSavedSearch}
            />
            <MoviesCardList
                movies={sortedMovies}
                buttonClassName='card__remove-button'
                onButtonClick={handleRemove}
                onCardClick={onCardClick}
            />
        </main>
    )
}