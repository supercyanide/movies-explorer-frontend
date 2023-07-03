import './AuthFormInput.css';

export default function AuthFormInput({
    value ='',
    validationMessage,
    validate,
    isDisabled = false,

    label,
    name,
    type,

    min,
    max,
    placeholder,
    onChange
}) 
{
    function handleChange(evt) {
        if (validate && evt.target.value && !validate(evt.target.value))
            evt.target.setCustomValidity(validationMessage);
        else
            evt.target.setCustomValidity('');
        onChange(evt);
    }

    return (
        
        <label className="input-block">{label}
            <input
                type={type}
                value={value}
                className={`input-block__input ${validationMessage ? 'input-block__input_error':''}`} 
                name={name} 
                required
                minLength={min} 
                maxLength={max}
                placeholder={placeholder}
                onChange={handleChange}
                disabled={isDisabled}
            />
            <span className="input-block__error">{validationMessage}</span>
        </label>
    );
}