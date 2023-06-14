import './AuthFormInput.css';

export default function AuthFormInput({ label, name, error, type, isValid = true }) {
    return <label className="input__label">{label}
        <input type={type} className={`input__input ${isValid ? '':'input__input_error'}`} name={name} required />
        <span className="input__error">{error}</span>
    </label>
}