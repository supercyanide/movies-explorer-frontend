import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState } from 'react';

export default function SearchForm(){
    const [isChecked, setChecked] = useState(false);

    function handleChange({ target: { checked: newState } }) {
        setChecked(newState);
    }
    return(
        <section>
            <form className="search-form" name='search'>
                <fieldset className='search-form__input-form'>
                    <button type='submit' className='search-form__submit-btn'></button>
                    <input type='text' minLength={2} maxLength={30} required className='search-form__input' placeholder='Фильм'></input>
                </fieldset>
                <div className='search-form__filter-checkbox'>
                    <FilterCheckbox checked={isChecked} onChange={handleChange} />
                </div>
            </form>
        </section>
        
    )
}