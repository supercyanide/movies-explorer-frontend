export const registerInputs = [
    { 
        caption: "Имя", 
        name: "name",
        isReqired: false,
    }, 
    { 
        caption: 'E-mail', 
        name: 'email', 
        type:'email',
        isReqired: true,
    }, 
    { 
        caption: 'Пароль', 
        name: 'password', 
        error:'Что-то пошло не так...', 
        type:'password', 
        isValid: false,
        isReqired: true,
    }
];
export const loginInputs = [
    { 
        caption: 'E-mail', 
        name: 'email', 
        type:'email',
        isReqired: true,
    }, 
    { 
        caption: 'Пароль', 
        name: 'password', 
        type:'password',
        isReqired: true,
    }
];