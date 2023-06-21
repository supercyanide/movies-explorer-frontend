
import LogoPath from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import AuthFormInput from './AuthFormInput/AuthFormInput';
import './AuthForm.css';

export default function AuthForm({ inputs, title, formName, buttonName, bottomText, bottomLink, linkTarget }) {
    return(
        <form className="auth-form" name={formName}>
            <Link className='auth-form__logo' to='/'>
                <img alt="Movies Explorer" src={LogoPath}/>
            </Link>
            <h1 className="auth-form__title">{title}</h1>
            <fieldset className="auth-form__inputs">
                {inputs.map(({ caption, name, error, type, isValid, isReqired, min, max }, i) => 
                    <AuthFormInput 
                        key={i} 
                        label={caption} 
                        type={type} 
                        name={name} 
                        error={error} 
                        isValid={isValid} 
                        isReqired={isReqired}
                        min={min}
                        max={max}
                    />
                )}
            </fieldset>
            <fieldset className="auth-form__buttons">
                <button className="auth-form__button" type="submit">{buttonName}</button>
                <span className="auth-form__text">{bottomText}<Link to={linkTarget} className="auth-form__link">{bottomLink}</Link></span>
            </fieldset>
        </form>
    );
};
