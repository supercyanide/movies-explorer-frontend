import './Profile.css';
import ProfileInput from './ProfileInput/ProfileInput';
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/currentUserContext';

export default function Profile({ onSignout, onUpdate, submitErrorMessage = ''}) {
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const[isSubmitVisible, setSubmitVisible] = useState(false);
    const [isDisabled, setDisabled] = useState(true);

    function handleChangeName(evt) {
        setName(evt);
    }
    
    function handleChangeEmail(evt) {
        setEmail(evt);
    }

    function toggleControlsVisibility() {
        setSubmitVisible(!isSubmitVisible);
        setDisabled(!isDisabled);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdate({name, email});
        toggleControlsVisibility();
    }
    
    return (
        <main className='main'>
            <section className='profile'>
                <form className="profile-form" name='profile' onSubmit={handleSubmit}>
                    <h1 className="profile-form__title">Привет, {name}!</h1>
                    <fieldset className="profile-form__inputs">
                        <ProfileInput 
                        caption="Имя"
                        name='name'
                        type='text'
                        placeholder='Введите имя'
                        value={name || ""}
                        onChange={handleChangeName}
                        isDisabled={isDisabled}
                        />

                        <ProfileInput 
                        caption="E-mail"
                        name='email'
                        type='email'
                        placeholder='Введите адрес электронной почты'
                        value={email || ""}
                        onChange={handleChangeEmail}
                        isDisabled={isDisabled} />
                        
                    </fieldset>
                    <div className="profile-form__buttons">
                        {isSubmitVisible ?
                            <div className="profile-form__submit-block">
                                <span className="profile-form__error">{submitErrorMessage}</span>
                                <button type='submit' className="profile-form__submit-btn" disabled={false} onClick={handleSubmit} >Сохранить</button>
                            </div>
                        :
                            <div className="profile-form__control-block">
                                <button type="button" className="profile-form__control" onClick={toggleControlsVisibility}>Редактировать</button>
                                <button onClick={onSignout} type='button' className="profile-form__control profile-form__control_signout">Выйти из аккаунта</button>
                            </div>
                        }
                    </div>
                    
                </form>
            </section>
        </main>
        
    );
}