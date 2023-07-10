import './Profile.css';
import ProfileForm from './ProfileForm/ProfileForm';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/currentUserContext';
import { profileInputs } from '../../utils/authInputs';

export default function Profile({ onSignout, onSubmit, submitErrorMessage = '', isSubmitVisible}) {
    const currentUser = useContext(CurrentUserContext);
    
    return (
        <main className='main'>
            <section className='profile'>
                <ProfileForm
                    inputs={profileInputs}
                    currentUser={currentUser}
                    submitErrorMessage={submitErrorMessage}
                    onSignout={onSignout}
                    onSubmit={onSubmit}
                    submitVisibility={isSubmitVisible}
                />
            </section>
        </main>
        
    );
}