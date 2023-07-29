import './InfoPopup.css';

export default function InfoPopup({onClose, isOpen, movieInfo, onButtonClick}){
    const backgroundImage={
        backgroundImage: 'url(' + movieInfo.image + ')',
    }
    let movieRatingColor
    if (movieInfo.rating && movieInfo.rating>= 8){
        movieRatingColor = 'info-popup__item-rating_high'
    }
    else if (movieInfo.rating && 5 < movieInfo.rating < 8 ){
        movieRatingColor = 'info-popup__item-rating_normal'
    }
    else if(movieInfo.rating && movieInfo.rating < 5){
        movieRatingColor = 'info-popup__item-rating_low'
    }
    else if(!movieInfo.rating){
        movieRatingColor=''
    }
    function handleClickLike(evt){
        evt.preventDefault()
        let btn = evt.target;
        onButtonClick(movieInfo);
        btn.classList.toggle('buttons__like-button_active') 
        
    }
    console.log(movieInfo.genre)
    return(
        <div className={`info-popup ${isOpen ? 'info-popup_opened' : ''}`}>
            <div style={backgroundImage} className='info-popup__background'/>
            <div className='info-popup__container'>
            <div className='info-popup__info'>
                <h3 className='info-popup__title'>{movieInfo.name}</h3>
                <div className='info-popup__info-block'>
                    <p className='info-popup__info-item'>{movieInfo.country}</p>
                    <div className='info-popup__info-items'>
                        <p className='info-popup__info-item'>Rating : <span className={`info-popup__item-rating ${movieRatingColor}`}>{movieInfo.rating ? movieInfo.rating : "No data"}</span></p>
                        <div className='info-popup__items-line'></div>
                        <p className='info-popup__info-item'>{movieInfo.duration}</p>
                        <div className='info-popup__items-line'></div>
                        <p className='info-popup__info-item'>{movieInfo.year}</p>
                    </div>
                    <p className='info-popup__info-item'>{ movieInfo.genre? (movieInfo.genre).join(', ') : ''}</p>
                </div>
                <p className='info-popup__info-item info-popup__info-item_discription'>{movieInfo.description}</p>
            </div>
            <div className='buttons'>
                <button className='buttons__trailer-button'>
                    <span className='button__play-logo'/>
                    Watch trailer
                </button>
                <button onClick={handleClickLike} className={`buttons__like-button ${movieInfo.isSavedMovie ?'buttons__like-button_active':''}`}>
                </button>
            </div>
                <button type="button" onClick={onClose} className="info-popup__close"></button>
            </div>
        </div>
    )
}