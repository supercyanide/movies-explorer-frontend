import logoPath from '../../images/logo.svg';
import './Header.css';
import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function Header({isLogged = false}) {
    return (
        <header className = {`header ${isLogged ? 'header_logged' : ''}`}>
            <Link className="header__logo" to='/'>
                <img src={logoPath} alt="Movies Explorer"/>
            </Link>
            <Navigation isLogged={isLogged} />
        </header>
            
    )
}