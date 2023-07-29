import './Footer.css'

export default function Footer(){
    return(
        <footer className='footer'>
            <p className='footer__title'>Данный учебный проект очень учебный</p>
            <div className='footer__items'>
                <p className='footer__item footer__copyright'>© 2023</p>
                <ul className='footer__links'>
                    <li className='footer__item footer__item_link'>
                        <a target='_blank' className='footer__link' href='https://www.linkedin.com/in/lilia-schedrina-ba3588279' rel="noreferrer">Linkedin</a>
                    </li>
                    <li className='footer__item footer__item_link'>
                        <a target='_blank' className='footer__link' href='https://github.com' rel="noreferrer">Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}