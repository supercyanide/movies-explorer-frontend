import './Profile.css';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/currentUserContext';
import { useState } from 'react';
import useValidation from '../../hooks/useValidation';

export default function Profile({ onSignout, onSubmit, submitErrorMessage = '', submitVisibility}) {
    const currentUser = useContext(CurrentUserContext);

    const[isSubmitVisible, setSubmitVisible] = useState(submitVisibility);
    const [isDisabled, setDisabled] = useState(true);

    const obj = currentUser;
    delete obj._id
    delete obj.__v

    const { values, errors, isValid, handleChange, isFormChanged, resetForm } = useValidation(".profile-form", obj);

    async function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit(values)
            .then((res) => {
                if (res) {
                    toggleControlsVisibility();
                    resetForm();
                } else {
                    handleChange({
                        target: {
                            name: 'email',
                            value: currentUser.email
                        }
                    })
                }
            })
    }
    function toggleControlsVisibility() {
        setSubmitVisible(!isSubmitVisible);
        setDisabled(!isDisabled);
    }
    
    return (
        <main className='main'>
            <section className='profile'>
                <form className="profile-form" name='profile' onSubmit={handleSubmit}>
                    <h1 className="profile-form__title">Привет, {currentUser.name}!</h1>
                    <fieldset className="profile-form__inputs">
                    <>
                        <label className='profile-input'>
                            <input
                                placeholder='Имя'
                                name='name'
                                className={`profile-input__input ${errors.name ? "profile-input__input_error" : ""}`}
                                type='text'
                                value={values.name || ""}
                                onChange={handleChange}
                                required={true}
                                disabled={isDisabled}
                                minLength={2}
                                maxLength={25}
                                pattern="^[A-ЯЁа-яёA-Za-z\s]+$"
                            />
                            <span className='profile-input__caption'>Имя</span>
                        </label>
                        <span className="profile-input__error-message">{errors.name}</span>
                    </>
                    <>
                        <label className='profile-input'>
                            <input
                                placeholder='name@example.com'
                                name='email'
                                className={`profile-input__input ${errors.email ? "profile-input__input_error" : ""}`}
                                type='text'
                                value={values.email || ""}
                                onChange={handleChange}
                                required={true}
                                disabled={isDisabled}
                                minLength={2}
                                maxLength={40}
                                pattern='^\S+@\S+\.\S+$'
                            />
                            <span className='profile-input__caption'>Email</span>
                        </label>
                        <span className="profile-input__error-message">{errors.email}</span>
                    </>
                    </fieldset>
                    <div className="profile-form__buttons">
                        {isSubmitVisible ?
                            <div className="profile-form__submit-block">
                                <span className="profile-form__error">{submitErrorMessage}</span>
                                <button type='submit' className="profile-form__submit-btn" disabled={isValid === false || isFormChanged === false} onClick={handleSubmit} >Сохранить</button>
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