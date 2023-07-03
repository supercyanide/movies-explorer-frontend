import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchForm({handleSearch, handleCheckboxSearch, onChange}){
    const localValue = localStorage.getItem('lastSearchValue')
    const localCheckboxValue = localStorage.getItem('lastCheckboxValue')

    const [value, setValue] = useState(localValue ?? '')
    const [isChecked, setIsChecked] = useState(localCheckboxValue ?? 0)
    const [isSavedChecked, setIsSavedChecked] = useState(false)

    const location = useLocation()
    
    

    function handleSubmitSearch(evt){
        evt.preventDefault();
        if (location.pathname === '/movies') {
            localStorage.setItem('lastSearchValue', value)
            localStorage.setItem('lastCheckboxValue', isChecked)
        }
        handleSearch({value,isChecked});
    }

    function handleChange({ target: { checked: newState } } ) {
        if (newState===false & location.pathname === '/movies'){
            setIsChecked(0);
            localStorage.setItem('lastCheckboxValue', 0)
        }
        if (newState===true & location.pathname === '/movies') {
            setIsChecked(1);
            localStorage.setItem('lastCheckboxValue', 1)
        };
        if (location.pathname === '/saved-movies'){
            setIsSavedChecked(newState);
        }
        handleCheckboxSearch(newState);
    }

    return(
        <section>
            <form className="search-form" name='search' onSubmit={handleSubmitSearch}>
                <fieldset className='search-form__input-form'>
                    <button type='submit' className='search-form__submit-btn'></button>
                    <input name='search' onChange={(e) => setValue(e.target.value)} type='text' minLength={2} maxLength={30} required className='search-form__input' placeholder='Фильм'></input>
                </fieldset>
                <div className='search-form__filter-checkbox'>
                    <FilterCheckbox checked={location.pathname === '/movies'? parseInt(isChecked): isSavedChecked} onChange={handleChange} />
                </div>
            </form>
        </section>
        
    )
}