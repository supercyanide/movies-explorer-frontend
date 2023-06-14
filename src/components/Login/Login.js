import './Login.css'
import AuthForm from '../AuthForm/AuthForm'
const inputs = [{ caption: 'E-mail', name: 'email', type:'email' }, { caption: 'Пароль', name: 'password', type:'password'}];

export default function Login() {
    return (
        <>
            <AuthForm
                inputs={inputs}
                title="Рады видеть!"
                formName='login'
                buttonName="Войти"
                bottomText="Ещё не зарегистрированы?"
                bottomLink="Регистрация"
                linkTarget="/signup" 
            />

        </>
        
    );
};
