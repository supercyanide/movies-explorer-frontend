import './AuthFormInput.css';
export default function AuthFormInput({
    value = '',
    validationMessage,
    isDisabled = false,
    pattern,
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
                pattern={pattern}
            />
            <span className="input-block__error">{validationMessage}</span>
        </label>
    );
}