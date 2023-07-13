import { useState, useCallback, useEffect, useLayoutEffect, useRef } from 'react';

import isEqual from 'lodash.isequal';

function useValidation(formSelector, initialValues = {}) {
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

    // useEffect(()=>{
    //     if (!currentUser && form){
    //         setIsValid(form.checkValidity())
    //     }
    //     if(currentUser && form) {
    //         setIsValid(form.checkValidity()&&(values.name != currentUser.name || values.email != currentUser.email));
    //     }
    // },[currentUser, form, values])

    // const handleChange = ({target}) => {
    //     const { name, value } = target;
    //     setValues({ ...values, [name]: value });
    //     setErrors({ ...errors, [name]: target.validationMessage });
    // }

    function handleChange({ target }) {
        const { name, value, validationMessage } = target;
        // console.log(target.checkValidity())
        setValues({ ...values, [name]: value});
        setErrors({...errors, [name]: validationMessage })
        setTouched({ 
            ...touched, 
            [name]: value !== initialValuesRef.current[name]
        })
    }

    // const resetForm = useCallback((newValues = currentUser||{}, newErrors = {}, newIsValid = false) => {
    //     setValues(newValues);
    //     setErrors(newErrors);
    //     setIsValid(newIsValid);

    // }, [setValues, setErrors, setIsValid, currentUser]);

    function resetForm() {
        setValues(initialValuesRef.current);
        setErrors({});
        setTouched({});
    }

    return { values: values, errors, isValid, isFormChanged, handleChange, resetForm };

}

export default useValidation;