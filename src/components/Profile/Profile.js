import './Profile.css';
import ProfileInput from './ProfileInput/ProfileInput';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Profile() {
    const navigate = useNavigate();

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
        <main className='main'>
            <section className='profile'>
                <form className="profile-form" name='profile' onSubmit={handleSubmit}>
                    <h1 className="profile-form__title">Привет, {name}!</h1>
                    <fieldset className="profile-form__inputs">
                        <ProfileInput caption="Имя" name='name' type='text' placeholder='Введите имя' value={name} onChange={handleNameChange} isDisabled={isDisabled}/>
                        <ProfileInput caption="E-mail" name='email' type='email' placeholder='Введите адрес электронной почты' value={email} onChange={handleEmailChange} isDisabled={isDisabled} />
                    </fieldset>
                    <fieldset className="profile-form__buttons">
                        {isSubmitVisible ?
                            <div className="profile-form__submit-block">
                                <span className="profile-form__error">При обновлении профиля произошла ошибка.</span>
                                <button type='submit' className="profile-form__submit-btn" disabled={false} onClick={toggleControlsVisibility}>Сохранить</button>
                            </div>
                        :
                            <div className="profile-form__control-block">
                                <button type="button" className="profile-form__control" onClick={toggleControlsVisibility}>Редактировать</button>
                                <button onClick={() => navigate('/')} type='button' className="profile-form__control profile-form__control_signout">Выйти из аккаунта</button>
                            </div>
                        }
                    </fieldset>
                </form>
            </section>
        </main>
        
    );
}