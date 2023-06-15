
import LogoPath from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import AuthFormInput from './AuthFormInput/AuthFormInput';
import './AuthForm.css';

export default function AuthForm({ inputs, title, formName, buttonName, bottomText, bottomLink, linkTarget }) {
    return(
        <form className="auth-form" name={formName}>
            <img alt='Лого' src={LogoPath} className='input__logo'/>
            <h1 className="auth-form__title">{title}</h1>
            <fieldset className="auth-form__inputs">
                {inputs.map(({ caption, name, error, type, isValid }, i) => <AuthFormInput key={i} label={caption} type={type} name={name} error={error} isValid={isValid} />)}
            </fieldset>
            <fieldset className="auth-form__buttons">
                <button className="auth-form__button" type="submit">{buttonName}</button>
                <span className="auth-form__text">{bottomText}<Link to={linkTarget} className="auth-form__link">{bottomLink}</Link></span>
            </fieldset>
        </form>
    );
};
