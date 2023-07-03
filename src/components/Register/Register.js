import AuthForm from "../AuthForm/AuthForm";
import {registerInputs as inputs} from '../../utils/authInputs';


export default function Register({ handleRegister }) {

    const handleSubmit = (e) => {
        handleRegister(e);
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
                    onSubmit={handleSubmit}
                />
            </section>
            
        </main>
        
        
    );
}