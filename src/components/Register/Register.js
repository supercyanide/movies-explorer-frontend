import AuthForm from "../AuthForm/AuthForm";

const inputs = [{ caption: "Имя", name: "name" }, { caption: 'E-mail', name: 'email', type:'email' }, { caption: 'Пароль', name: 'password', error:'Что-то пошло не так...', type:'password', isValid: false }];

export default function Register() {
    return (
        <>
            <AuthForm
                inputs={inputs}
                title="Добро пожаловать!"
                formName='register'
                buttonName="Зарегистрироваться"
                bottomText="Уже зарегистрированы?"
                bottomLink="Войти"
                linkTarget="/signin" 
            />

        </>
        
    );
}