import React from 'react';
import './Navigation.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Burger from '../Burger/Burger';

export default function Navigation({isLogged}){
    const [isBurgerOpened, setBurger] = useState(false);

    function toggleBurger() {
        setBurger(!isBurgerOpened);
    }

    const body = !isLogged?
        <nav className="navigation">
            <Link className='navigation__link navigation__link_sign-up' to="/signup">Регистрация</Link>
            <Link className='navigation__link navigation__link_sign-in' to="/signin">Войти</Link>
        </nav>
        :
        <>
            <nav className="navigation navigation_logged">
                <div className='navigation__pages-links'>
                    <Link className='navigation__link navigation__link_logged navigation__link_page' to="/movies">Фильмы</Link>
                    <Link className='navigation__link navigation__link_logged navigation__link_page' to="/saved-movies">Сохраненные фильмы</Link>
                </div>
                <Link className='navigation__link navigation__link_logged navigation__link_profile' to="/profile">Аккаунт</Link>
                <button className="navigation__menu" onClick={toggleBurger} type="button"></button>
            </nav>
            <Burger isOpened={isBurgerOpened} onClose={toggleBurger} />
        </>;

    return body;

}