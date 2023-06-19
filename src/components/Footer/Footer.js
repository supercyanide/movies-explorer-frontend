import './Footer.css'

export default function Footer(){
    return(
        <footer className='footer'>
            <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__items'>
                <p className='footer__item footer__copyright'>© 2020</p>
                <div className='footer__links'>
                    <a target='_blank' href='https://practicum.yandex.ru/' className='footer__item footer__item_link'>Яндекс.Практикум</a>
                    <a target='_blank' href='https://github.com' className='footer__item footer__item_link'>Github</a>
                </div>
            </div>
        </footer>
    )
}