import './ProfileInput.css';

export default function ProfileInput({ caption, placeholder, name, type, value, onChange, isDisabled}) {

    return (
        <label className='profile-input__label'>
            <input
                placeholder={placeholder}
                name={name}
                className="profile-input__input"
                type={type}
                value={value}
                onChange={({ target }) => onChange(target.value)}
                required={true}
                disabled={isDisabled}
                minLength={2}
                maxLength={25}
            />
            <span className='profile-input__caption'>{caption}</span>
        </label>
    );

}
