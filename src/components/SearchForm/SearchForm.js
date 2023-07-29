import './SearchForm.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchForm({handleSearch, handleSavedSearch}){
    const localValue = localStorage.getItem('lastSearchValue')

    const [value, setValue] = useState(localValue ?? '')
    const [savedValue, setSavedValue] = useState('')

    const location = useLocation()
    
    function handleSubmitSearch(evt){
        evt.preventDefault();
        if (location.pathname === '/movies') {
            localStorage.setItem('lastSearchValue', value)
            handleSearch({value});
        }
        if (location.pathname === '/saved-movies') {
            handleSavedSearch({savedValue});
        }
    }

    function setValues(v){
        if (location.pathname ==='/movies'){
            setValue(v)
        }
        if (location.pathname ==='/saved-movies'){
            setSavedValue(v)
        }
        
    }

    return(
        <section>
            <form className="search-form" name='search' onSubmit={handleSubmitSearch}>
                <fieldset className='search-form__input-form'>
                    <button type='submit' className='search-form__submit-btn'></button>
                    <input name='search' value={location.pathname ==='/movies'? value : savedValue} onChange={(e) => setValues(e.target.value)} type='text' minLength={2} maxLength={30} required className='search-form__input' placeholder='Фильм'></input>
                </fieldset>
                <div className='search-form__filter-checkbox'>
                    {/* <FilterCheckbox checked={location.pathname === '/movies'? parseInt(isChecked): isSavedChecked} onChange={handleChange} /> */}
                </div>
            </form>
        </section>
        
    )
}