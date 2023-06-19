import './Page404.css';
import { useNavigate } from 'react-router-dom';

export default function Page404({ link }) {
    const navigate = useNavigate();
    return (
        <main className='main'>
            <section className='page404'>
                <div className='page404__info'>
                    <h2 className="page404__title">404</h2>
                    <p className="page404__subtitle">Страница не найдена</p>
                </div>
                <button type="button" onClick={() => navigate(-1)} className="page404__link">Назад</button>
            </section>
        </main>
        
    )
}
