import './ProfileInput.css';

export default function ProfileInput({ caption, placeholder, name, type, value, validate, validationMessage, onChange, isDisabled}) {

    function handleChange(evt) {
        if (validate && evt.target.value && !validate(evt.target.value))
            evt.target.setCustomValidity(validationMessage);
        else
            evt.target.setCustomValidity('');
        onChange(evt);
    }

    return (
        <>
        <label className='profile-input'>
            <input
                placeholder={placeholder}
                name={name}
                className={`profile-input__input ${validationMessage ? "profile-input__input_error" : ""}`}
                type={type}
                value={value}
                onChange={handleChange}
                required={true}
                disabled={isDisabled}
                minLength={2}
                maxLength={25}
            />
            <span className='profile-input__caption'>{caption}</span>
        </label>
        <span className="profile-input__error-message">{validationMessage}</span>
        </>
    );

}
