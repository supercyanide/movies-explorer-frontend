
import LogoPath from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import AuthFormInput from './AuthFormInput/AuthFormInput';
import './AuthForm.css';

export default function AuthForm({ inputs, title, formName, buttonName, bottomText, bottomLink, linkTarget }) {
    return(
        <form className="input-form" name={formName}>
            <img alt='Лого' src={LogoPath} className='input__logo'/>
            <h1 className="input-form__title">{title}</h1>
            <fieldset className="input-form__inputs">
                {inputs.map(({ caption, name, error, type, isValid }, i) => <AuthFormInput key={i} label={caption} type={type} name={name} error={error} isValid={isValid} />)}
            </fieldset>
            <fieldset className="input-form__buttons">
                <button className="button input-form__button" type="submit">{buttonName}</button>
                <span className="input-form__text">{bottomText}<Link to={linkTarget} className="input-form__link">{bottomLink}</Link></span>
            </fieldset>
        </form>
    );
};
