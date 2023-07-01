import { useEffect, useState } from 'react';
import './FilterCheckbox.css';

export default function FilterCheckbox({ checked , onChange }) {
  return (
    <label className="filter-checkbox">
        <span className='filter-checkbox__span'>
            <span className={`filter-checkbox__circle ${checked ? 'filter-checkbox__circle_checked' : ''}`}></span>
        </span>
        <input type="checkbox" checked={checked} value={checked} onChange={onChange} className="filter-checkbox__checkbox" />
        Короткометражки
    </label >
  );
}