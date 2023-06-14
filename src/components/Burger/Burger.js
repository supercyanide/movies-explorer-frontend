import './Burger.css';
import { NavLink } from 'react-router-dom';

export default function Burger({ isOpened = false, onClose }) {

    function toggleLinkActive({isActive}) {
        return isActive ? 'burger__link burger__link_active' : 'burger__link';
    }

    return (isOpened &&
        <div className="burger">
            <ul className="burger__container">
                <li className="burger__item"><NavLink onClick={onClose} className={toggleLinkActive} to="/">Главная</NavLink></li>
                <li className="burger__item"><NavLink onClick={onClose} className={toggleLinkActive} to="/movies">Фильмы</NavLink></li>
                <li className="burger__item"><NavLink onClick={onClose} className={toggleLinkActive} to="/saved-movies">Сохранённые фильмы</NavLink></li>
                <li className="burger__item burger__item_profile"><NavLink onClick={onClose} className={toggleLinkActive} to="/profile">Аккаунт</NavLink></li>
                <button className="burger__close" onClick={onClose}></button>
            </ul>
        </div>)
}