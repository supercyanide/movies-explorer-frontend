import './AboutMe.css';
import photo from '../../../images/photo.jpg'
import MainTitle from '../MainTitle/MainTitle';

export default function AboutMe() {
    return (
        <section id='about-me' className="about-me">
            <MainTitle text="Разработчик" />
            <div className="about-me__person">
                <h3 className="about-me__name">Лиля</h3>
                <p className="about-me__about">Фронтенд-разработчик, 22 года</p>
                <p className="about-me__bio">Я родилась в городе Ростов-на-Дону. Закончила колледж по программе "Гостиничный сервис", но в итоге решила полностью изменить жизнь и поступить в ДГТУ на направление "Прикладная информатика", выбрав профиль разработки игр. А еще я отличный работник. Каждый день на работе для меня как праздник!
                </p>
                <ul className="about-me__contacts">
                    <li><a target="_blank" href="https://github.com/supercyanide" className="about-me__contact" rel="noreferrer">Github</a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/lilia-schedrina-ba3588279" className="about-me__contact" rel="noreferrer">Linkedin</a></li>
                </ul>
                <img src={photo} alt="Фронтенд разработчик" className="about-me__photo"/>
            </div>
        </section>
    );
}