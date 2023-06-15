export const registerInputs = [
    { 
        caption: "Имя", 
        name: "name" 
    }, 
    { 
        caption: 'E-mail', 
        name: 'email', 
        type:'email' 
    }, 
    { 
        caption: 'Пароль', 
        name: 'password', 
        error:'Что-то пошло не так...', 
        type:'password', 
        isValid: false 
    }
];
export const loginInputs = [
    { 
        caption: 'E-mail', 
        name: 'email', 
        type:'email' 
    }, 
    { 
        caption: 'Пароль', 
        name: 'password', 
        type:'password'
    }
];