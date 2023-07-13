import { useState, useCallback, useEffect } from 'react';

function useValidation(formSelector, currentUser) {
    const form = document.body.querySelector(formSelector);
    const [values, setValues] = useState(currentUser||{});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    
    useEffect(()=>{
        if (!currentUser && form){
            setIsValid(form.checkValidity())
        }
        if(currentUser && form) {
            setIsValid(form.checkValidity()&&(values.name != currentUser.name || values.email != currentUser.email));
        }
    },[currentUser, form, values])

    const handleChange = ({target}) => {
        const { name, value } = target;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
    }

    const resetForm = useCallback((newValues = currentUser||{}, newErrors = {}, newIsValid = false) => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);

    }, [setValues, setErrors, setIsValid, currentUser]);

    return { values, errors, isValid, handleChange, resetForm };

}

export default useValidation;