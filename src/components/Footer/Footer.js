import './Footer.css'

 export default function Footer(){
    return(
        <div className='footer'>
            <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__items'>
                <p className='footer__item footer__copyright'>© 2020</p>
                <div className='footer__links'>
                    <p className='footer__item'>Яндекс.Практикум</p>
                    <p className='footer__item'>Github</p>
                </div>
                
            </div>
        </div>
    )
 }