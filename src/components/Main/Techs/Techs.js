import './Techs.css';
import MainTitle from '../MainTitle/MainTitle';

export default function Techs() {
    return (
        <section id='techs' className="techs">
            <MainTitle text="Технологии"/>
            <h3 className="techs__title">7 технологий</h3>
            <p className="techs__subtitle">За время самообучения я овладела следующими технологиями:</p>
            <ul className="techs__techs">
                <li className="techs__tech">HTML</li>
                <li className="techs__tech">CSS</li>
                <li className="techs__tech">JS</li>
                <li className="techs__tech">React</li>
                <li className="techs__tech">Git</li>
                <li className="techs__tech">Express.js</li>
                <li className="techs__tech">mongoDB</li>
            </ul>
        </section>
    );
}