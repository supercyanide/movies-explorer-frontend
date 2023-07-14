import { useState, useEffect, useRef } from 'react';

import isEqual from 'lodash.isequal';

function useValidation(initialValues = {}) {
    const initialValuesRef = useRef(initialValues);

    const [values, setValues] = useState(initialValuesRef.current);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({})

    useEffect(() => {
        if (!isEqual(initialValuesRef.current, initialValues)) {
            initialValuesRef.current = initialValues;
            setValues(initialValuesRef.current)
        }

    }, [initialValues]);
    
    const isFormChanged = Object.keys(touched).some(key => touched[key] === true);
    const isValid = Object.keys(errors).every(key => !errors[key]);

    function handleChange({ target }) {
        const { name, value, validationMessage } = target;
        setValues({ ...values, [name]: value});
        setErrors({...errors, [name]: validationMessage })
        setTouched({ 
            ...touched, 
            [name]: value !== initialValuesRef.current[name]
        })
    }

    function resetForm() {
        setValues(initialValuesRef.current);
        setErrors({});
        setTouched({});
    }

    return { values: values, errors, isValid, isFormChanged, handleChange, resetForm };

}

export default useValidation;