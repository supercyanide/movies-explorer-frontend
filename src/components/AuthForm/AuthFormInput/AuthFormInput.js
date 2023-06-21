import './AuthFormInput.css';

export default function AuthFormInput({ label, name, error, type, isValid = true, isReqired, min, max}) {
    return (
        <label className="input-block">{label}
            <input 
                type={type} 
                className={`input-block__input ${isValid ? '':'input-block__input_error'}`} 
                name={name} 
                required={isReqired} 
                minLength={min} 
                maxLength={max}
            />
            <span className="input-block__error">{error}</span>
        </label>
    );
}