import './Portfolio.css';

export default function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__items">
                <li className="portfolio__item">
                    <a href="https://github.com/supercyanide/how-to-learn" target="_blank" className="portfolio__button" rel="noreferrer">Статичный сайт
                        <span className='portfolio__arrow'>↗</span>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a href="https://github.com/supercyanide/russian-travel" target="_blank" className="portfolio__button" rel="noreferrer">Адаптивный сайт
                        <span className='portfolio__arrow'>↗</span>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a href="https://github.com/supercyanide/mesto" target="_blank" className="portfolio__button" rel="noreferrer">Одностраничное приложение
                        <span className='portfolio__arrow'>↗</span>
                    </a>
                </li>
            </ul>
        </section>
    );
}