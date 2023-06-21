import './Footer.css'

export default function Footer(){
    return(
        <footer className='footer'>
            <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__items'>
                <p className='footer__item footer__copyright'>© 2020</p>
                <ul className='footer__links'>
                    <li className='footer__item footer__item_link'>
                        <a target='_blank' className='footer__link' href='https://practicum.yandex.ru/' rel="noreferrer">Яндекс.Практикум</a>
                    </li>
                    <li className='footer__item footer__item_link'>
                        <a target='_blank' className='footer__link' href='https://github.com' rel="noreferrer">Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}