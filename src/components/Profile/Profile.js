import './Profile.css';
import ProfileInput from '../ProfileInput/ProfileInput';
import { useState } from 'react';

export default function Profile() {

    const [name, setName] = useState('Виталий');
    const [email, setEmail] = useState('example@ya.ru');

    const[isSubmitVisible, setSubmitVisible] = useState(false);
    const [isDisabled, setDisabled] = useState(true);
    const handleNameChange = (name) => setName(name);
    const handleEmailChange = (email) => setEmail(email);

    function toggleControlsVisibility() {
        setSubmitVisible(!isSubmitVisible);
        setDisabled(!isDisabled);
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        setName(evt.target.name.value);
        setEmail(evt.target.email.value);
    }
    return (
        <form className="profile" name='profile' onSubmit={handleSubmit}>
            <h2 className="profile__title">Привет, {name}!</h2>
            <fieldset className="profile__inputs">
                <ProfileInput caption="Имя" name='name' placeholder='Введите имя' value={name} onChange={handleNameChange} isRequired={true} isDisabled={isDisabled}/>
                <ProfileInput caption="E-mail" name='email' placeholder='Введите адрес электронной почты' value={email} onChange={handleEmailChange} isRequired={true} isDisabled={isDisabled} />
            </fieldset>
            <fieldset className="profile__buttons">
                {isSubmitVisible ?
                    <div className='profile__submit-block ${isSubmitVisible'>
                        <span className='profile__error'>При обновлении профиля произошла ошибка.</span>
                        <button className='profile__submit' onClick={toggleControlsVisibility}>Сохранить</button>
                    </div>
                :
                    <div className='profile__control-block'>
                        <button type="button" className="profile__button" onClick={toggleControlsVisibility}>Редактировать</button>
                        <button type="button" className="profile__button profile__button_signout">Выйти из аккаунта</button>
                    </div>
                }
                
                
            </fieldset>
        </form>
    );
}