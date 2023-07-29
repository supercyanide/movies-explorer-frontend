import './App.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate} from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/currentUserContext';
import errors from '../../utils/errors';
import ProtectedRouteElement from '../ProtectedRoute';

import InfoPreloader from '../InfoPreloader/InfoPreloader';

import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Page404 from '../Page404/Page404';
import Popup from '../Popup/Popup';
import InfoPopup from '../InfoPopup/InfoPopup';

import * as auth from '../../utils/auth'
import  moviesApi  from '../../utils/MoviesApi';
import { convertMovieData } from '../../utils/convertMovieData';
import api from '../../utils/Api';
import { flags } from '../../utils/flags';

function App() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  
  const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem('loggedIn'))||false);
  
  const [currentUser, setCurrentUser] = useState({});
  const [isSubmitVisible, setSubmitVisible] = useState(false);

  const [savedMovies, setSavedMovies] = useState(JSON.parse(localStorage.getItem('savedMovies'))||[]);
  const [isError, setIsError] = useState(false);
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isPreloaderActive, setIsPreloaderActive] = useState(false);
  const [isInfoPreloaderActive, setIsInfoPreloaderActive] = useState(false);
  const [isInfoPopupOpened, setisInfoPopupOpened] = useState(false)
  const [movieInfo, setMovieInfo] = useState('')
  const location = useLocation();
  useEffect(() => {
    if (token) {
      auth.checkToken(token)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          localStorage.setItem('loggedIn', true);
          setCurrentUser(res);
        }
      })
      .catch(err => {
        console.log(err);
      });
    }
  }, [token])

  useEffect(() => {
    if (loggedIn) {
      api
        .getFavoriteMovies()
        .then((res)=> setSavedMovies(res))
        .catch(console.log);
      api
        .getUserInfo()
        .then((user) => {
          setCurrentUser(user);
          setLoggedIn(true)
          localStorage.setItem('loggedIn', true)

        })
        .catch(console.log);
    }
  }, [loggedIn]);

  useEffect(()=>{
    if (savedMovies && savedMovies.length) {
      localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
    }
    else localStorage.setItem("savedMovies", '[]');
  },[savedMovies])

  const closePopup = () => {
    setIsPopupOpened(false)
    setisInfoPopupOpened(false)
  };

  function handleLogin(formValue) {
    auth.signin(formValue)
      .then(() => {
        setLoggedIn(true);
        localStorage.setItem("loggedIn", true);
        navigate('/movies');
      })
      .catch(err => {
        setIsError(true);
        setPopupMessage(err);
        setIsPopupOpened(true);
        console.log(err);
      })
  }

  function handleRegister(formValue) {
    auth.signup(formValue)
      .then(() => {
        handleLogin(formValue);
        setIsError(false);
        setPopupMessage("Регистрация прошла успешно");
        setIsPopupOpened(true);
      })
      .catch((err) => {
        setIsError(true)
        setPopupMessage(identifyError(err));
        setIsPopupOpened(true);
        console.log(err);
      })
  }

  function signOut() {
    localStorage.clear();
    setIsPopupOpened(false);
    setCurrentUser({});
    setLoggedIn(false);
    setSavedMovies([]);
    navigate('/');
  }
  

  function handleUpdateUser ({ name, email }) {
    return api.editUserInfo({name, email})
      .then((result) => {
        setCurrentUser(result.data);
        setIsError(false);
        setPopupMessage('Данные успешно сохранены');
        setIsPopupOpened(true);
        return result;
      })
      .catch((err) => {
        setSubmitVisible(true)
        setIsError(true);
        setPopupMessage(identifyError(err));
        setIsPopupOpened(true);
      })
  }

  function identifyError(code){
    return (code + ' ' + errors[code])
  }

  function removeFromSaved(id) {
    api
      .deleteMovie(id)
      .then(() => {
        const filtredMovies = savedMovies.filter((movie) => movie._id !== id)
        setSavedMovies(filtredMovies);
        })
      .catch((err) => console.log(err));
  }

  function addToSaved(movie) {
    const data = {
      ...movie
    };
    delete data.rating
    delete data.description
    delete data.genre
    delete data.isSavedMovie
    delete data.trailer
    delete data.duration
    delete data.country
    api
      .postMovie(data)
      .then((movie) => {
        setSavedMovies([...savedMovies, movie]);
      })
      .catch((err) => console.log(err));
  };

  function handleMoviesButton(movie) {
    const savedMovie = savedMovies.find(({ movieId }) => movieId === movie.movieId);
    if (savedMovie){
      removeFromSaved(savedMovie._id)
    }
    else {
      addToSaved(movie)
    }
  }

  function handleSavedMoviesButton(movie) {
    console.log(movie)
    removeFromSaved(movie._id);
  }
  function handleSavedMoviesInfoPopupButton(movie) {
    console.log(movie, savedMovies)
    const saved = savedMovies.find(({ movieId }) => movieId === movie.movieId)
    removeFromSaved(saved._id);
    setisInfoPopupOpened(false)

  }

  function onCardClick(movie){
    setIsInfoPreloaderActive(true);
    moviesApi.getInfo(movie.movieId)
    .then((res)=>{
      const isSavedMovie = Boolean(savedMovies.find(({ movieId }) => movieId === movie.movieId));
      const movieId = movie.movieId;
      const name = res.short.name
      let rating
      if (res.short.aggregateRating){
        rating = res.short.aggregateRating.ratingValue
      }
      const description = res.short.description
      const genre = res.short.genre
      let trailer
      if (res.short.trailer){
        trailer = res.short.trailer.url
      }
      const duration=res.top.runtime.displayableProperty.value.plainText
      const year = res.main.releaseYear.year
      const country = res.main.countriesOfOrigin.countries[0].text + " "+(flags.find(element => element.name === res.main.countriesOfOrigin.countries[0].text).emoji);
      const image = res.short.image
      setMovieInfo({name, rating, description, genre, trailer, duration, year, country, image, isSavedMovie, movieId})
      setIsInfoPreloaderActive(false)
      setisInfoPopupOpened(true);
    })
    .catch((err)=>{
      setIsInfoPreloaderActive(false)
      console.log(err)
    })
  }

  function onSearch(value) {
    setIsPreloaderActive(true);
    moviesApi.search(value)
    .then((res)=>{
      let moviesList = res.description.map((item) => convertMovieData(item));
       // форматирование полей
      localStorage.setItem("filter", JSON.stringify(moviesList));
      setSearchedMovies(moviesList);
    })
    .catch((err) => {
      console.log(err)}
    )
    .finally(()=>{
      setIsPreloaderActive(false);
    })
  }

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Popup titleText={isError?'Ошибка':'Успешно'} popupText={popupMessage} submitText="ОК" onClose={closePopup} isError={isError} isOpen={isPopupOpened} />
          <Routes>
            {/* незащищенные роуты */}
            <Route path='/signup' element={
              loggedIn? 
              <Navigate to='/movies'/>
              :
              <Register handleRegister={handleRegister}/>
            }/>
            <Route path='/signin' element={
              loggedIn ? 
              <Navigate to='/movies'/>
              :
              <Login handleLogin={handleLogin}/>
            }/>
            <Route exact path='/' element={
              <>
                <Header isLogged={loggedIn}/>
                <Main/>
                <Footer/>
              </>
            }/>
            {/* защищенные роуты */}
              <Route path='/movies' element={
                <>
                  <Header isLogged={loggedIn}/>
                  <InfoPreloader isActive={isInfoPreloaderActive}/>
                  <InfoPopup onButtonClick = {handleMoviesButton} onClose={closePopup} isOpen={isInfoPopupOpened} movieInfo={movieInfo} savedMovies={savedMovies} ></InfoPopup>
                  <ProtectedRouteElement element={Movies} loggedIn={loggedIn}
                    allMovies={searchedMovies}
                    onButtonClick={handleMoviesButton}
                    savedMovies={savedMovies}
                    onSearch={onSearch}
                    onCardClick={onCardClick}
                    isPreloaderActive={isPreloaderActive}
                  />
                  <Footer/>
                </>
              }/>
              <Route path='/saved-movies' element={
                <>
                  <Header isLogged={loggedIn}/>
                  <InfoPreloader isActive={isInfoPreloaderActive}/>
                  <InfoPopup onButtonClick = {handleSavedMoviesInfoPopupButton} onClose={closePopup} isOpen={isInfoPopupOpened} movieInfo={movieInfo} ></InfoPopup>
                  <ProtectedRouteElement 
                    element={SavedMovies} 
                    loggedIn={loggedIn}
                    onRemove={handleSavedMoviesButton}
                    savedMovies={savedMovies} 
                    setSavedMovies={setSavedMovies}
                    onCardClick={onCardClick}
                  />
                  <Footer/>
                </>
              }/>
            <Route exact path='/profile' element={
              <>
                <Header isLogged={loggedIn}/>
                <ProtectedRouteElement element={Profile} loggedIn={loggedIn} 
                  onSignout={signOut} 
                  onSubmit={handleUpdateUser} 
                  isSubmitVisible={isSubmitVisible}/>
              </>
            }/>
            {/* роут 404 */}
            <Route path='*' element={
              <Page404/>
            }/>
          </Routes>
      </CurrentUserContext.Provider>
    </div>
  )}

export default App;
