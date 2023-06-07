import './Footer.css'

 export default function Footer(){
    return(
        <div className='footer'>
            <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__line'/>
            <div className='footer__items'>
                <p className='footer__ item footer__copyright'>© 2020</p>
                <div className='footer__links'>
                    <p className='footer__ item'>Яндекс.Практикум</p>
                    <p className='footer__ item'>Github</p>
                </div>
                
            </div>
        </div>
    )
 }