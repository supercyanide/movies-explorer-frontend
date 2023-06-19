import './ProfileInput.css';

export default function ProfileInput({ caption, name, placeholder, value, onChange, isReqired, isDisabled}) {

    return (
    <label className='profile-input__label'>
        {caption}
        <input
            placeholder={placeholder}
            name={name}
            className="profile-input__input"
            required={isReqired}
            value={value}
            onChange={({ target }) => onChange(target.value)}
            disabled={isDisabled} 
        />
    </label>);

}
