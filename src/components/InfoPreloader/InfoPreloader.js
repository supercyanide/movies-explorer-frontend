import React from 'react'
import './InfoPreloader.css'

export default function InfoPreloader({isActive}){
    return (
        <div className={`container ${isActive ? "container_active": ""}`}>
            <div className='info-preloader'>
                <div className="info-preloader__container">
                    <span className="info-preloader__round"></span>
                </div>
            </div>
        </div>
    )
};
