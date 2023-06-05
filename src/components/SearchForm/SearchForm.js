import './SearchForm.css';

export default function SearchForm(){
    return(
        <div className="search-form">
            <form className='search-form__input-form'>
                <input className='search-form__input' placeholder='Фильм'></input>
                <button type='submit' className='search-form__submit-btn'></button>
            </form>
            <div className='search-form__option'>
                <button className='search-form__option-btn'></button>
            </div>
            
        </div>
    )
}