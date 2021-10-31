import React from 'react'
import './Header.css'
import logo from './assets/brand_logo.jpg'
import HeaderOption from './HeaderOption'

import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import {
    Link
} from "react-router-dom";

function Header({ inputValue, setInputValue }) {
    return (
        <div className="header" style={{ backgroundColor: "white" }}>
            <div className="header-left">
                <img src={logo} alt="brand logo" />

                <div className="header-search">
                    <SearchIcon />
                    <input type="text" value={inputValue} onChange={event => setInputValue(event.target.value)} />
                </div>
            </div>
            <div className="header-right">
                <Link to="/home">
                    <HeaderOption title="Home" Icon={HomeIcon} />
                </Link>
                <Link to="/about">
                    <HeaderOption title="Chi siamo" Icon={SupervisorAccountIcon} />
                </Link>
                <Link to="/home">
                    <HeaderOption title="Prodotti" Icon={ShoppingCartIcon} />
                </Link>
                <Link to="/contacts">
                    <HeaderOption title="Contatti" Icon={ContactSupportIcon} />
                </Link>
            </div>
        </div>
    )
}

export default Header