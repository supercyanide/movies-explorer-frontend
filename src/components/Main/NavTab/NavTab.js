import './NavTab.css';

export default function NavTab(){
    return(
        <nav className='navtab'>
            <ul className="navtab__block">
                <li className="navtab__link">
                    <a className="navtab__text" href="#about">
                        О проекте
                    </a>
                </li>
                <li className="navtab__link">
                    <a className="navtab__text" href="#techs">
                        Технологии
                    </a>
                </li>
                <li className="navtab__link">
                    <a className="navtab__text" href="#about-me">
                        Студент
                    </a>
                </li>
            </ul>
        </nav>
    )
}