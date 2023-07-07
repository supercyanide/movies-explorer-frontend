import { useState, useCallback } from 'react';

function useValidation(formSelector, currentUser) {
    const form = document.body.querySelector(formSelector);
    const [values, setValues] = useState(currentUser||{});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const checkValidity = (form, name, value ) => {
        if (form.checkValidity()===true && value !== currentUser[name]){
            return true
        }
    }

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        if (currentUser){
            setIsValid(checkValidity(form, name, value));
        }else setIsValid(form.checkValidity())
        
    }

    const resetForm = useCallback((newValues = currentUser||{}, newErrors = {}, newIsValid = false) => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);

    }, [setValues, setErrors, setIsValid, currentUser]);

    return { values, errors, isValid, handleChange, resetForm };

}

export default useValidation;