import React from 'react'
import './Header.css'
import logo from './../assets/brand_logo.jpg'
import HeaderOption from './HeaderOption'

import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { fontFamily } from '@mui/system'

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <img src={logo} alt="brand logo" />
                {/* <h1 style={{ marginRight: "15px", marginLeft: "15px", fontFamily: "'Open Sans', sans-serif"}}>3D Models</h1> */}

                <div className="header-search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header-right">
                <HeaderOption title="Home" Icon={HomeIcon}/>
                <HeaderOption title="Chi siamo" Icon={SupervisorAccountIcon}/>
                <HeaderOption title="Prodotti" Icon={ShoppingCartIcon}/>
                <HeaderOption title="Contatti" Icon={ContactSupportIcon}/>
            </div>
        </div>
    )
}

export default Header
