import React from 'react'
import './Header.css'
import logo from './assets/brand_logo.jpg'
import HeaderOption from './HeaderOption'

import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

function Header() {
    return (
        <div className="header" style={{ backgroundColor: "white" }}>
            <div className="header-left">
                <img src={logo} alt="brand logo" />

                <div className="header-search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header-right">
                <HeaderOption title="Home" Icon={HomeIcon} />
                <HeaderOption title="Chi siamo" Icon={SupervisorAccountIcon} />
                <HeaderOption title="Prodotti" Icon={ShoppingCartIcon} />
                <HeaderOption title="Contatti" Icon={ContactSupportIcon} />
            </div>
        </div>
    )
}

export default Header
