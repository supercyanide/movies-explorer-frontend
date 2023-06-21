export const registerInputs = [
    { 
        caption: "Имя", 
        name: "name",
        type:'text',
        isReqired: true,
        min: 2,
        max:20
    }, 
    { 
        caption: 'E-mail', 
        name: 'email', 
        type:'email',
        isReqired: true,
        min: 2,
        max:25
    }, 
    { 
        caption: 'Пароль', 
        name: 'password', 
        error:'Что-то пошло не так...', 
        type:'password', 
        isValid: false,
        isReqired: true,
        min: 8,
        max:25
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