import ProfileInput from "../ProfileInput/ProfileInput";
import useValidation from "../../../hooks/useValidation";
import { useState, useEffect } from "react";

export default function ProfileForm({ inputs, onSignout, onSubmit, currentUser, submitErrorMessage, submitVisibility}) {
    const[isSubmitVisible, setSubmitVisible] = useState(submitVisibility);
    const [isDisabled, setDisabled] = useState(true);
    const obj = currentUser;
    delete obj._id
    delete obj.__v

    const { values, errors, isValid, handleChange, resetForm } = useValidation(".profile-form", obj);
    useEffect(() => {
        resetForm();
    }, [resetForm]);

    async function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit(values)
        .then((res) => {
            if (res) {
                toggleControlsVisibility()
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
        <form className="profile-form" name='profile' onSubmit={handleSubmit}>
            <h1 className="profile-form__title">Привет, {currentUser.name}!</h1>
            <fieldset className="profile-form__inputs">
            {inputs.map(({ caption, name, type, validate, min, max, placeholder }, i) =>
                <ProfileInput
                    key={i}
                    caption={caption} 
                    type={type} 
                    name={name} 
                    min={min}
                    max={max}
                    value={values[name]||""}
                    placeholder={placeholder}
                    onChange={handleChange}
                    validate={validate}
                    validationMessage={errors[name]} 
                    isDisabled={isDisabled}
                />
            )}
            </fieldset>
            <div className="profile-form__buttons">
                {isSubmitVisible ?
                    <div className="profile-form__submit-block">
                        <span className="profile-form__error">{submitErrorMessage}</span>
                        <button type='submit' className="profile-form__submit-btn" disabled={!isValid} onClick={handleSubmit} >Сохранить</button>
                    </div>
                :
                    <div className="profile-form__control-block">
                        <button type="button" className="profile-form__control" onClick={toggleControlsVisibility}>Редактировать</button>
                        <button onClick={onSignout} type='button' className="profile-form__control profile-form__control_signout">Выйти из аккаунта</button>
                    </div>
                }
            </div>
            
        </form>
    );

}
