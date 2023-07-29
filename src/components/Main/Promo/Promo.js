import './Promo.css';
import NavTab from '../NavTab/NavTab';

export default function Promo(){
    return(
        <section className='promo'>
            <div className='promo__landing'>
                <h1 className='promo__title'>Учебный проект начинающего веб-разработчика</h1>
                <div className='promo__navtab'>
                    <NavTab/>
                </div>
            </div>
        </section>
    );
}