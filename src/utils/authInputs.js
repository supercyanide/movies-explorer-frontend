export function isEmail(string) {
    return string && /[^@\s]+@[^@\s]+\.[^@\s]+/.test(string);
}

export function isName(string) {
    return string && (/^[a-zа-я\s-]+$/i).test(string);
}

export const registerInputs = [
    { 
        caption: "Имя", 
        name: "name",
        type:'text',
        min: 2,
        max:20,
        validate: isName,
        validationMessage:'Введите корректное имя'
    }, 
    { 
        caption: 'E-mail', 
        name: 'email', 
        type:'email',
        min: 2,
        max:40,
        validate: isEmail,
        validationMessage:'Введите корректный Email'
    }, 
    { 
        caption: 'Пароль', 
        name: 'password', 
        type:'password', 
        isValid: false,
        min: 8,
        max:25,
        validationMessage:'Введите корректный пароль'
    }
];
export const loginInputs = [
    { 
        caption: 'E-mail', 
        name: 'email', 
        type:'email',
        isReqired: true,
        min: 8,
        max:40,
        placeholder:'Введите Email',
        validate: isEmail,
        validationMessage:'Введите корректный Email'
        
    }, 
    { 
        caption: 'Пароль', 
        name: 'password', 
        type:'password',
        isReqired: true,
        min: 8,
        max:25,
        placeholder:'Введите пароль',
        validationMessage:'Введите корректный пароль'

    }
];
export const profileInputs = [
    { 
        caption: "Имя", 
        name: "name",
        type:'text',
        min: 2,
        max:20,
        validate: isName,
        placeholder:'Введите имя',
        validationMessage:'Введите корректное имя'
    },
    { 
        caption: 'E-mail', 
        name: 'email', 
        type:'email',
        isReqired: true,
        min: 8,
        max:40,
        validate: isEmail,
        placeholder:'Введите Email',
        validationMessage:'Введите корректный Email'
        
    }, 
    
];