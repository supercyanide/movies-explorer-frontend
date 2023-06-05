import logoPath from '../../images/logo.svg';
// import accountSvgPath from '../../images/profile.svg';
import './Header.css';
import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <Link className="header__logo" to='/'>
            <img src={logoPath} alt="Movies Explorer"/>
            </Link>
            <div className="header__info">
                <Navigation/>
                <div className='header__link header__link_account'>
                    <p>Аккаунт</p>
                    <image className='header__accout-logo'/>
                </div>

                {/* <p className="header__email">{email}</p> */}
                {/* <Link to={linkTo} className={`header__button ${isLoggedIn ? 'header__button_exit' : ''}`} onClick={onClick}>
                    {text} 
                </Link> */}
            </div>
        </header>
    )
}