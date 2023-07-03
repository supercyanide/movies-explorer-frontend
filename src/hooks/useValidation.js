import { useState, useCallback } from 'react';

function useValidation(formSelector, currentUser) {
    const [values, setValues] = useState(currentUser||{});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest(formSelector).checkValidity());
    }

    const resetForm = useCallback((newValues = currentUser||{}, newErrors = {}, newIsValid = false) => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);

    }, [setValues, setErrors, setIsValid, currentUser]);

    return { values, errors, isValid, handleChange, resetForm };

}

export default useValidation;