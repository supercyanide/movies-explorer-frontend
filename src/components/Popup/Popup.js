import './Popup.css';
import popupErrorImagePath from '../../images/error.svg'
import popupSuccessImagePath from '../../images/success.svg'


export default function Popup({ isOpen, titleText, popupText, submitText, onClose, isError }) {

    function handleSubmit() {
        onClose && onClose();
    }

    return (
        <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <h3 className="popup__title">{titleText}</h3>
                <img src={isError? popupErrorImagePath: popupSuccessImagePath } alt='Ошибка' className='popup__image'/>
                <p className="popup__text">{popupText}</p>
                <button type="button" onClick={handleSubmit} className="popup__submit">{submitText}</button>
                <button type="button" onClick={handleSubmit} className="popup__close"></button>
            </div>
        </div>
    );
}