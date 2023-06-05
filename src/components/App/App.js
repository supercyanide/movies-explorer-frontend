import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import { Route, Switch, Redirect, useNavigate, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  const headerEndpoints = ['/movies', '/saved-movies', '/profile', '/'];
  const footerEndpoints = ['/movies', '/saved-movies', '/'];
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
        <>
          <Header/>
          <SearchForm/>
        </>
        }/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
