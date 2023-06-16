import './App.css';
import React from 'react';
import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Movies from '../Movies/Movies';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Page404 from '../Page404/Page404';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

function App() {

  const [isErrorPopup, setErrorPopup] = useState(false);

  const closeErrorPopup = () => setErrorPopup(false);

  return (
    <div className='page'>
      <ErrorPopup titleText="Ошибка" popupText="Сообщение ошибки" submitText="ОК" onClose={closeErrorPopup} isOpen={isErrorPopup} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              <Header isLogged={false}/>
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
          <Route path='*' element={
            <Page404/>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
