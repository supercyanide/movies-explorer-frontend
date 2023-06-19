import './AboutMe.css';
import photo from '../../../images/photo.png'
import MainTitle from '../MainTitle/MainTitle';

export default function AboutMe() {
    return (
        <section id='about-me' className="about-me">
            <MainTitle text="Студент" />
            <div className="about-me__person">
                <h3 className="about-me__name">Виталий</h3>
                <p className="about-me__about">Фронтенд-разработчик, 30 лет</p>
                <p className="about-me__bio">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
                    С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                </p>

                <ul className="about-me__contacts">
                    <li><a href="https://github.com/" className="about-me__contact">Github</a></li>
                </ul>
                <img src={photo} alt="Моё фото" className="about-me__photo" />
            </div>
        </section>
    );
}