import React from 'react'
import './HeaderOption.css'

function HeaderOption({ title, Icon }) {
    return (
        <div className="header-option">
            {Icon && <Icon className='header-option-icon' />}
            <h3 className="header-option-title">{title}</h3>
        </div>
    )
}

export default HeaderOption
