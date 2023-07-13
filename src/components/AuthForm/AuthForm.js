
import LogoPath from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AuthFormInput from './AuthFormInput/AuthFormInput';
import './AuthForm.css';
import useValidation from '../../hooks/useValidation';


export default function AuthForm({ inputs, title, formName, buttonName, bottomText, bottomLink, linkTarget, onSubmit}) {

    const [errorText, setErrorText] = useState('');

    const { values, errors, isValid, handleChange, resetForm } = useValidation(".auth-form");
    

    // useEffect(() => resetForm(), [resetForm]);

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

            {/* <input
                type='email'
                value={values.email}
                className={`input-block__input ${errors.email ? 'input-block__input_error':''}`} 
                name='email' 
                required
                minLength={8} 
                maxLength={40}
                placeholder='email'
                onChange={handleChange}
                disabled={false}
                pattern='^\S+@\S+\.\S+$'
            />

            <input
                type='password'
                value={values.password}
                className={`input-block__input ${errors.password ? 'input-block__input_error':''}`} 
                name='password' 
                required
                minLength={8} 
                maxLength={40}
                placeholder='password'
                onChange={handleChange}
                disabled={false}
                pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'
            /> */}
                {inputs.map(({ caption, name, type, min, max, placeholder }, i) => 
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
                        // validate={validate}
                        validationMessage={errors[name]}
                        pattern={name==='email'?'^\S+@\S+\.\S+$':''}
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
