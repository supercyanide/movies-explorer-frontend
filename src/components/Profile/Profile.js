import './Profile.css';
import ProfileInput from '../ProfileInput/ProfileInput';
import { useState } from 'react';

export default function Profile() {

    const [name, setName] = useState('Виталий');
    const [email, setEmail] = useState('example@ya.ru');

    const handleNameChange = (name) => setName(name);
    const handleEmailChange = (email) => setEmail(email);

    return (<form className="profile" name='profile'>
        <h2 className="profile__title">Привет, {name}!</h2>
        <fieldset className="profile__inputs">
            <ProfileInput caption="Имя" name='name' placeholder='Введите имя' value={name} onChange={handleNameChange} isRequired={true} />
            <ProfileInput caption="E-mail" name='email' placeholder='Введите адрес электронной почты' value={email} onChange={handleEmailChange} isRequired={true} />
        </fieldset>
        <fieldset className="profile__buttons">
            <button type="button" className="profile__button">Редактировать</button>
            <button type="button" className="profile__button profile__button_signout">Выйти из аккаунта</button>
        </fieldset>
    </form>);
}