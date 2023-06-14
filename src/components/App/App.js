import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Movies from '../Movies/Movies';
import { Route, Switch, Redirect, useNavigate, Routes, BrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  return (
    <div className='page'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
          <>
            <Header
              isLogged={false}
            />
            <Main/>
            <Footer/>
          </>
          }/>
          <Route path='/movies' element={
          <>
            <Header isLogged={true}/>
            <SearchForm/>
            <Movies/>
            <Footer/>
          </>
          }/>
          <Route path='/saved-movies' element={
          <>
            <Header isLogged={true}/>
            <SearchForm/>
            <SavedMovies/>
            <Footer/>
          </>
          }/>
          <Route path='/profile' element={
          <>
            <Header isLogged={true}/>
            <Profile/>

          </>
          }/>
          <Route path='/signup' element={
            <Register/>
          }/>
          <Route path='/signin' element={
            <Login/>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
