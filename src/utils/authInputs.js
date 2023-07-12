export function isEmail(string) {
    return string && /^\S+@\S+\.\S+$/.test(string);
}
export function isPassword(string) {
    return string && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(string);
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
        validationMessage:'Введите корректное имя',
        pattern: "^[a-z ,.'-]+$",
    }, 
    { 
        caption: 'E-mail', 
        name: 'email', 
        type:'email',
        min: 2,
        max:40,
        validate: isEmail,
        validationMessage:'Введите корректный Email',
        pattern: "^\S+@\S+\.\S+$",
    }, 
    { 
        caption: 'Пароль', 
        name: 'password', 
        type:'password', 
        isValid: false,
        validate: isPassword,
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
        validationMessage:'Введите корректный Email',
        pattern:'^\S+@\S+\.\S+$'
        
    }, 
    { 
        caption: 'Пароль', 
        name: 'password', 
        type:'password',
        isReqired: true,
        min: 8,
        max:25,
        placeholder:'Введите пароль',
        validationMessage:'Введите корректный пароль',
        // pattern:'^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'

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
        validationMessage:'Введите корректное имя',
        pattern: '^[a-zа-я\s-]+$/i',
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
        validationMessage:'Введите корректный Email',
        pattern: '^\S+@\S+\.\S+$',
    }, 
    
];