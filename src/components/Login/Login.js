import AuthForm from '../AuthForm/AuthForm'
import {loginInputs as inputs} from '../../utils/authInputs';

export default function Login() {
    return (
        <AuthForm
            inputs={inputs}
            title="Рады видеть!"
            formName='login'
            buttonName="Войти"
            bottomText="Ещё не зарегистрированы?"
            bottomLink="Регистрация"
            linkTarget="/signup" 
        />
        
    );
};
