import AuthForm from '../AuthForm/AuthForm'
import {loginInputs as inputs} from '../../utils/authInputs';
import { useState } from 'react';

export default function Login({ handleLogin }) {

    const handleSubmit = (formValue) => {
        handleLogin(formValue);
    }

    return (
        <main className='main'>
            <section className='login'>
                <AuthForm
                    inputs={inputs}
                    title="Рады видеть!"
                    formName='login'
                    buttonName="Войти"
                    bottomText="Ещё не зарегистрированы?"
                    bottomLink="Регистрация"
                    linkTarget="/signup" 
                    onSubmit={handleSubmit}
                />
            </section>
        </main>
        
        
    );
};
