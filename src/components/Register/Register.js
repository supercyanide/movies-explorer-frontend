import AuthForm from "../AuthForm/AuthForm";
import {registerInputs as inputs} from '../../utils/authInputs';

export default function Register() {
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
                />
            </section>
            
        </main>
        
        
    );
}