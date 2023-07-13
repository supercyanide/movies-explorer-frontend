import { Link } from 'react-router-dom';

import useValidation from '../../hooks/useValidation';
import LogoPath from '../../images/logo.svg';
import './Login.css'

export default function Login({ handleLogin }) {

    const { values, errors, isValid, handleChange } = useValidation(
        {
            email: '',
            password: ''
        }
    );

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            await handleLogin(values);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className='main'>
            <section className='login'>
                <form className="auth-form" name='login' onSubmit={handleSubmit}>
                    <Link className='auth-form__logo' to='/'>
                        <img alt="Поисковик фильмов" src={LogoPath}/>
                    </Link>
                    <h1 className="auth-form__title">Рады видеть!</h1>
                    <fieldset className="auth-form__inputs">
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
                        <button className="auth-form__button" disabled={!isValid} type="submit">Войти</button>
                        <span className="auth-form__text">Ещё не зарегистрированы?<Link to='/signup' className="auth-form__link">Регистрация</Link></span>
                    </fieldset>
                </form>
            </section>
        </main>
        
        
    );
};
