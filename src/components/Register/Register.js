import LogoPath from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import useValidation from '../../hooks/useValidation';
import { useEffect } from "react";


export default function Register({ handleRegister }) {

    const { values, errors, isValid, handleChange, resetForm } = useValidation(".auth-form");
    

    useEffect(() => resetForm(), [resetForm]);

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const result = handleRegister && await handleRegister(values);
            if (!result || !result.ok) throw new Error(result.error);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="main">
            <section className="register">
                <form className="auth-form" name='register' onSubmit={handleSubmit}>
                    <Link className='auth-form__logo' to='/'>
                        <img alt="Поисковик фильмов" src={LogoPath}/>
                    </Link>
                    <h1 className="auth-form__title">Добро пожаловать!</h1>
                    <fieldset className="auth-form__inputs">
                        <div>
                            <input
                                type='text'
                                value={values.name ||''}
                                className={`input-block__input ${errors.name ? 'input-block__input_error':''}`} 
                                name='name' 
                                required
                                minLength={2} 
                                maxLength={20}
                                placeholder='Имя'
                                onChange={handleChange}
                                disabled={false}
                                pattern="^[A-ЯЁа-яёA-Za-z\s]+$"
                            />
                            <span className="input-block__error">{errors.name}</span>
                        </div>
                        <div>
                            <input
                                type='email'
                                value={values.email ||''}
                                className={`input-block__input ${errors.email ? 'input-block__input_error':''}`} 
                                name='email' 
                                required
                                minLength={8} 
                                maxLength={40}
                                placeholder='name@example.com'
                                onChange={handleChange}
                                disabled={false}
                                pattern='^\S+@\S+\.\S+$'
                            />
                            <span className="input-block__error">{errors.email}</span>
                        </div>
                        <div>
                            <input
                                type='password'
                                value={values.password ||''}
                                className={`input-block__input ${errors.password ? 'input-block__input_error':''}`} 
                                name='password' 
                                required
                                minLength={8} 
                                maxLength={40}
                                placeholder='Пароль'
                                onChange={handleChange}
                                disabled={false}
                                pattern='^.{8,}$'
                            />
                            <span className="input-block__error">{errors.password}</span>
                        </div>
                    </fieldset>
                    <fieldset className="auth-form__buttons">
                        <button className="auth-form__button" disabled={!isValid} type="submit">Зарегистрироваться</button>
                        <span className="auth-form__text">Уже зарегистрированы?
                        <Link to='/signin' className="auth-form__link">Войти</Link></span>
                    </fieldset>
                </form>
            </section>
        </main>
        
        
    );
}