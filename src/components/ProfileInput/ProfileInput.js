import './ProfileInput.css';

export default function ProfileInput({ caption, name, placeholder, value, onChange }) {

    return (
    <label className='profile-input__label'>
        {caption}
        <input
            placeholder={placeholder}
            name={name}
            className="profile-input__input"
            value={value}
            onChange={({ target }) => onChange(target.value)} 
        />
    </label>);

}
