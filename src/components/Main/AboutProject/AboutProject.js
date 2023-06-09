import './AboutProject.css';
import MainTitle from '../MainTitle/MainTitle';

export default function AboutProject(){
    return (
        <section className='about-project' id='about'>
            <MainTitle text='О проекте'/>
            <ul className="about-project__texts">
                <li className='about-project__text'>
                    <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__caption">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className='about-project__text'>
                    <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__caption">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <div className="time">
                <div className="time__bar time__bar_green">1 неделя</div>
                <div className="time__bar">4 недели</div>
                <div className="time__caption">Back-end</div>
                <div className="time__caption">Front-end</div>
            </div>
        </section>
    );
}