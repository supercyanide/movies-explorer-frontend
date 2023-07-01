import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate, } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/currentUserContext';
import { MoviesDataContext } from '../../contexts/moviesDataContext';
import { useRef } from 'react';

import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Page404 from '../Page404/Page404';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

import * as auth from '../../utils/auth'
import  moviesApi  from '../../utils/MoviesApi';
import { convertMovieData } from '../../utils/convertMovieData';
import api from '../../utils/Api';

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const token = localStorage.getItem('token');

  const [savedMovies, setSavedMovies] = useState([]);
  const [isErrorPopup, setErrorPopup] = useState(false);
  const [errorMesage, setErrorMessage] = useState("");

  const closeErrorPopup = () => setErrorPopup(false);
  
  useEffect(()=>{
    if (savedMovies.length) {
      localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
    }
  },[savedMovies,])

  React.useEffect(() => {
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
        })
        .catch(console.log);
      
    }
  }, [loggedIn]);

  useEffect(() => {
    if (token) {
      auth.checkToken(token)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          setCurrentUser(res);
        }
      })
      .catch(err => {
        console.log(err);
      });
    }

  }, [token])

  

  function handleLogin(email, password) {
    auth.signin(email, password)
      .then(() => {
        setLoggedIn(true);
        navigate('/');
      })
      .catch(err => {
        setErrorMessage(err);
        setErrorPopup(true);
        console.log(err);
      })
  }

  function handleRegister(formValue) {
    auth.signup(formValue)
      .then(() => {
        navigate('/signin', { replace: true });
      })
      .catch((err) => {
        setErrorMessage(err);
        setErrorPopup(true);
        console.log(err);
      })
  }

  function signOut() {
    localStorage.removeItem('token');
    setCurrentUser({});
    setLoggedIn(false);
    navigate('/signin');
  }

  function handleUpdateUser ({ name, email }) {
    api.editUserInfo({name, email})
      .then((result) => {
        setCurrentUser(result.data)
      })
      .catch((err) => {
        console.log(err)
      })
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
    delete data.saved;
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

  // Извлекаю базу фильмов из LocalStorage, проверяю на длинну и возращую значение для обновления стейта movies
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
        <ErrorPopup titleText="Ошибка" popupText={errorMesage} submitText="ОК" onClose={closeErrorPopup} isOpen={isErrorPopup} />
          <Routes>
            <Route exact path='/' element={
              <>
                <Header isLogged={loggedIn}/>
                <Main/>
                <Footer/>
              </>
            }/>
              <Route path='/movies' element={
                <>
                  <Header isLogged={loggedIn}/>
                  <Movies
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
                  <SavedMovies
                  onRemove={handleSavedMoviesButton}
                  />
                  <Footer/>
                </>
              }/>
            <Route exact path='/profile' element={
              <>
                <Header isLogged={loggedIn}/>
                <Profile onSignout={signOut} onUpdate={handleUpdateUser} />
              </>
            }/>
            <Route path='/signup' element={
              <Register handleRegister={handleRegister}/>
            }/>
            <Route path='/signin' element={
              <Login handleLogin={handleLogin}/>
            }/>
            <Route path='*' element={
              <Page404/>
            }/>
          </Routes>
      </CurrentUserContext.Provider>
    </div>
  )}

export default App;
