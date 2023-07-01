import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchForm({handleSearch}){
    const localValue = localStorage.getItem('lastSearchValue')
    const localCheckboxValue = localStorage.getItem('lastCheckboxValue')
    const [value, setValue] = useState(localValue ?? '')
    const [isChecked, setIsChecked] = useState(localCheckboxValue ?? 0)

    const location = useLocation()
    
    function handleChange({ target: { checked: newState } }) {
        if (newState===false){
            setIsChecked(0);
        }
        if (newState===true) {
            setIsChecked(1);
        };
    }

    function handleSubmitSearch(evt){
        evt.preventDefault();
        console.log(isChecked)
        handleSearch({value,isChecked});
    }

    useEffect(() => {
        if (location.pathname === '/movies') {
          localStorage.setItem('lastSearchValue', value)
          localStorage.setItem('lastCheckboxValue', isChecked)
        }
      }, [value, isChecked])
    

    return(
        <section>
            <form className="search-form" name='search' onSubmit={handleSubmitSearch}>
                <fieldset className='search-form__input-form'>
                    <button type='submit' className='search-form__submit-btn'></button>
                    <input name='search' onChange={(e) => setValue(e.target.value)} type='text' minLength={2} maxLength={30} required className='search-form__input' placeholder='Фильм'></input>
                </fieldset>
                <div className='search-form__filter-checkbox'>
                    <FilterCheckbox checked={parseInt(isChecked)} onChange={handleChange} />
                </div>
            </form>
        </section>
        
    )
}