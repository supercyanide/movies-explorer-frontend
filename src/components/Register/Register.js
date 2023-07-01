import AuthForm from "../AuthForm/AuthForm";
import {registerInputs as inputs} from '../../utils/authInputs';
import { useState } from "react";


export default function Register({ handleRegister }) {
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
        name: ''
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
        handleRegister(formValue);
    }
    return (
        <main className="main">
            <section className="register">
                <AuthForm
                    inputs={inputs}
                    title="Добро пожаловать!"
                    formName='register'
                    buttonName="Зарегистрироваться"
                    bottomText="Уже зарегистрированы?"
                    bottomLink="Войти"
                    linkTarget="/signin" 
                    formValue={formValue}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                />
            </section>
            
        </main>
        
        
    );
}