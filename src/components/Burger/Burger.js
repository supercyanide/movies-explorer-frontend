import './Burger.css';
import { NavLink } from 'react-router-dom';

export default function Burger({ isOpened = false, onClose }) {

    function toggleLinkActive({isActive}) {
        return isActive ? 'burger__link burger__link_active' : 'burger__link';
    }
    function toggleLinkProfileActive({isActive}){
        return isActive ? 'burger__link burger__link_profile burger__link_active' : 'burger__link burger__link_profile';
    }

    return (isOpened &&
        <div className="burger">
            <nav className="burger__container">
                <NavLink onClick={onClose} className={toggleLinkActive} to="/">Главная</NavLink>
                <NavLink onClick={onClose} className={toggleLinkActive} to="/movies">Фильмы</NavLink>
                <NavLink onClick={onClose} className={toggleLinkActive} to="/saved-movies">Сохранённые фильмы</NavLink>
                <NavLink onClick={onClose} className={toggleLinkProfileActive} to="/profile">Аккаунт</NavLink>
                <button type='button' className="burger__close" onClick={onClose}></button>
            </nav>
        </div>)
}