import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes, json, useLocation, useNavigate, } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/currentUserContext';
import { useRef } from 'react';
import errors from '../../utils/errors';
import ProtectedRouteElement from '../ProtectedRoute';

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

import * as auth from '../../utils/auth'
import  moviesApi  from '../../utils/MoviesApi';
import { convertMovieData } from '../../utils/convertMovieData';
import api from '../../utils/Api';

function App() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  
  const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem('loggedIn'))||false);
  
  const [currentUser, setCurrentUser] = useState({});
  
  const [savedMovies, setSavedMovies] = useState(JSON.parse(localStorage.getItem('savedMovies'))||[]);
  const [isError, setIsError] = useState(false);
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

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
      getAllMovies();
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
    else localStorage.setItem("savedMovies",null);
  },[savedMovies,])

  const closePopup = () => setIsPopupOpened(false);

  function handleLogin(formValue) {
    auth.signin(formValue)
      .then(() => {
        setLoggedIn(true);
        localStorage.setItem('loggedIn', true);
        navigate('/');
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
        handleLogin(formValue)
        setIsError(false)
        setPopupMessage("Регистрация прошла успешно")
        setIsPopupOpened(true)
      })
      .catch((err) => {
        setIsError(true)
        setPopupMessage(identifyError(err));
        setIsPopupOpened(true);
        console.log(err);
      })
  }

  function signOut() {
    localStorage.removeItem('token');
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.setItem('loggedIn', false)
    navigate('/signin');
  }

  function handleUpdateUser ({ name, email }) {
    api.editUserInfo({name, email})
      .then((result) => {
        setCurrentUser(result.data);
        setIsError(false);
        setPopupMessage('Данные успешно сохранены');
        setIsPopupOpened(true);
      })
      .catch((err) => {
        console.log(err);
        setPopupMessage(err);
        setIsPopupOpened(true);
      })
  }

  function identifyError(code){
    return (code + ' '+ errors[code])
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
    else {addToSaved(movie);}
  }

  function handleSavedMoviesButton(movie) {
    removeFromSaved(movie._id);
  }

  const extractAllMoviesLocal = () => {
    let allMoviesLocal = JSON.parse(localStorage.getItem("allMovies"));
    if (!allMoviesLocal) {
      return (allMoviesLocal = []);
    }
    return allMoviesLocal;
  };

  const [allMovies, setAllMovies] = useState(extractAllMoviesLocal());
  

  const getAllMovies = () => {
    moviesApi.getMovies()
      .then((res) => {
        console.log()
        let moviesList = res.map((item) => convertMovieData(item)); // форматирование полей
        localStorage.setItem("allMovies", JSON.stringify(moviesList));
        setAllMovies(moviesList);
      })
      .catch((err) => {
        console.log(err)}
      );
  };

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Popup titleText={isError?'Ошибка':'Успешно'} popupText={popupMessage} submitText="ОК" onClose={closePopup} isError={isError} isOpen={isPopupOpened} />
          <Routes>
            {/* незащищенные роуты */}
            <Route path='/signup' element={
              <Register handleRegister={handleRegister}/>
            }/>
            <Route path='/signin' element={
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
                  <ProtectedRouteElement element={Movies} loggedIn={loggedIn}
                    allMovies={allMovies}
                    onButtonClick={handleMoviesButton}
                    savedMovies={savedMovies}
                  />
                  <Footer/>
                </>
              }/>
              <Route path='/saved-movies' element={
                <>
                  <Header isLogged={loggedIn}/>
                  <ProtectedRouteElement 
                    element={SavedMovies} 
                    loggedIn={loggedIn}
                    onRemove={handleSavedMoviesButton}
                    savedMovies={savedMovies} 
                    setSavedMovies={setSavedMovies}
                  />
                  <Footer/>
                </>
              }/>
            <Route exact path='/profile' element={
              <>
                <Header isLogged={loggedIn}/>
                <ProtectedRouteElement element={Profile} loggedIn={loggedIn} 
                  onSignout={signOut} 
                  onUpdate={handleUpdateUser} />
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
