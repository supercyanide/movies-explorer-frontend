import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState } from 'react';

export default function SearchForm(){
    const [isChecked, setChecked] = useState(false);
    const [isFocused, setFocused] = useState(false);

    function handleChange({ target: { checked: newState } }) {
        setChecked(newState);
    }
    return(
        <form className="search-form">
            <div className='search-form__input-form'>
                <input className='search-form__input' placeholder='Фильм'></input>
                <button type='submit' className='search-form__submit-btn'></button>
            </div>
            <div className='search-form__option'>
                <FilterCheckbox checked={isChecked} onChange={handleChange} />
            </div>
        </form>
    )
}