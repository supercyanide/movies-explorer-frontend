import AuthForm from '../AuthForm/AuthForm'
import {loginInputs as inputs} from '../../utils/authInputs';
import { useState } from 'react';

export default function Login({ handleLogin }) {
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formValue.email || !formValue.password) {
            return;
        }
        handleLogin(formValue.email, formValue.password)
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
                    onChange={handleChange}
                />
            </section>
        </main>
        
        
    );
};
