import React from 'react'
import './LoadMoreButton.css'

export default function LoadMoreButton({ onClick, className }) {
    return(
        <div className='load-more'>
            <button type='button' onClick={onClick} className={className}>Ещё</button>
        </div>
    )
}