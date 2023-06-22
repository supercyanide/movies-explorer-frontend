import React from 'react';
import './Navigation.css';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Burger from '../Burger/Burger';

export default function Navigation({isLogged}){
    const navigate = useNavigate();
    const [isBurgerOpened, setBurger] = useState(false);

    function toggleBurger() {
        setBurger(!isBurgerOpened);
    }
    function toggleLinkActive({isActive}) {
        return isActive ? 'navigation__link navigation__link_active navigation__link_logged' : 'navigation__link navigation__link_logged';
    }

    const body = !isLogged?
        <nav className="navigation">
            <button type='button' className='navigation__button navigation__button_sign-up' onClick={() => navigate('/signup')}>Регистрация</button>
            <button type='button' className='navigation__button navigation__button_sign-in' onClick={() => navigate('/signin')}>Войти</button>
        </nav>
        :
        <>
            <nav className="navigation navigation_logged">
                <ul className='navigation__pages-links'>
                    <li className='navigation__item'><NavLink className={toggleLinkActive} to="/movies">Фильмы</NavLink></li>
                    <li className='navigation__item'><NavLink className={toggleLinkActive} to="/saved-movies">Сохраненные фильмы</NavLink></li>
                </ul>
                <NavLink className={toggleLinkActive} to="/profile">Аккаунт<span className='navigation__profile-icon'></span></NavLink>
                <button className="navigation__menu" onClick={toggleBurger} type="button"></button>
            </nav>
            <Burger isOpened={isBurgerOpened} onClose={toggleBurger} />
        </>;

    return body;

}