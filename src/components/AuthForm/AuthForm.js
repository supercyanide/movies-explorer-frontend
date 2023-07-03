
import LogoPath from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AuthFormInput from './AuthFormInput/AuthFormInput';
import './AuthForm.css';
import useValidation from '../../hooks/useValidation';

export default function AuthForm({ inputs, title, formName, buttonName, bottomText, bottomLink, linkTarget, onSubmit}) {

    const [errorText, setErrorText] = useState('');

    const { values, errors, isValid, handleChange, resetForm } = useValidation(".auth-form");
    

    useEffect(() => resetForm(), [resetForm]);

    async function handleSubmit(evt) {
        evt.preventDefault();
        setErrorText('');
        try {
            const result = onSubmit && await onSubmit(values);
            if (!result || !result.ok) throw new Error(result.error);
        } catch (error) {
            setErrorText(error.message || 'Неизвестная ошибка');
        }
    }


    return(
        <form className="auth-form" name={formName} onSubmit={handleSubmit}>
            <Link className='auth-form__logo' to='/'>
                <img alt="Поисковик фильмов" src={LogoPath}/>
            </Link>
            <h1 className="auth-form__title">{title}</h1>
            <fieldset className="auth-form__inputs">
                {inputs.map(({ caption, name, type, validate, min, max, placeholder }, i) => 
                    <AuthFormInput 
                        key={i} 
                        label={caption} 
                        type={type} 
                        name={name} 
                        min={min}
                        max={max}
                        value={values[name]}
                        placeholder={placeholder}
                        onChange={handleChange}
                        validate={validate}
                        validationMessage={errors[name]} 
                    />
                )}
            </fieldset>
            <fieldset className="auth-form__buttons">
                <button className="auth-form__button" disabled={!isValid} type="submit">{buttonName}</button>
                <span className="auth-form__text">{bottomText}<Link to={linkTarget} className="auth-form__link">{bottomLink}</Link></span>
            </fieldset>
        </form>
    );
};
