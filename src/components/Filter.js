import React, { useState } from 'react';
import './Filter.css'

import marvel_logo from './assets/marvel_logo.svg'
import dc_logo from './assets/dc_logo.svg'

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Slider from '@mui/material/Slider';
import Collapse from '@mui/material/Collapse';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FilterListIcon from '@mui/icons-material/FilterList';
import CategoryIcon from '@mui/icons-material/Category';
import EuroIcon from '@mui/icons-material/Euro';
import ReorderIcon from '@mui/icons-material/Reorder';

export default function Filter() {
    const [openCategory, setOpenCategory] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);
    const [selectedMenuIndex, setSelectedMenuIndex] = useState(0)
    const [anchorEl, setAnchorEl] = useState(null)
    const [price, setPrice] = React.useState([0, 100]);

    const menuOpen = Boolean(anchorEl)

    const menuOptions = [
        'Ultime uscite',
        'Prezzo: crescente',
        'Prezzo: decrescente',
    ]

    /* Filter interaction */
    const handleFilterClick = () => setOpenFilter(openFilter => !openFilter)

    /* Category interaction */
    const handleCategoryClick = () => {
        setOpenCategory(openCategory => !openCategory);
    };

    /* Menu interaction */
    const handleMenuItemClick = (_, index) => {
        setSelectedMenuIndex(index)
        setAnchorEl(null)
    }

    const handleClickMenuListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    /* Price slider */
    const handlePriceChange = (event, newPrice) => {
        setPrice(newPrice);
    };

    return (
        <div className="filter">
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="div"
                aria-labelledby="nested-list-filter"
            >
                {/* Filter collapse */}
                <ListItemButton onClick={handleFilterClick}>
                    <ListItemIcon>
                        <FilterListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Filtri" variant="h3" component="div" />
                    {openFilter ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openFilter} timeout="auto" unmountOnExit>
                    {/* Order by */}
                    <List
                        component="nav"
                        aria-label="Ordina per"
                        sx={{ bgcolor: 'background.paper' }}
                    >
                        <ListItem
                            button
                            id="lock-button"
                            aria-haspopup="listbox"
                            aria-controls="lock-menu"
                            aria-label="Ordina per"
                            aria-expanded={menuOpen ? 'true' : undefined}
                            onClick={handleClickMenuListItem}
                        >
                            <ListItemIcon>
                                <ReorderIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Ordina per"
                                secondary={menuOptions[selectedMenuIndex]}
                            />
                        </ListItem>
                    </List>
                    <Menu
                        id="lock-menu"
                        anchorEl={anchorEl}
                        open={menuOpen}
                        onClose={handleCloseMenu}
                        MenuListProps={{
                            'aria-labelledby': 'lock-button',
                            role: 'listbox',
                        }}
                    >
                        {menuOptions.map((option, index) => (
                            <MenuItem
                                key={index}
                                selected={index === selectedMenuIndex}
                                onClick={(event) => handleMenuItemClick(event, index)}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                    {/* end Order by */}
                    {/* Category */}
                    <ListItemButton onClick={handleCategoryClick}>
                        <ListItemIcon>
                            <CategoryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Categorie" />
                        {openCategory ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openCategory} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 10 }}>
                                <ListItemIcon >
                                    <img src={marvel_logo} alt="Marvel" className="filter-item-logo" />
                                </ListItemIcon>
                                <ListItemText primary="Marvel" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 10 }}>
                                <ListItemIcon>
                                    <img src={dc_logo} alt="DC" className="filter-item-logo" />
                                </ListItemIcon>
                                <ListItemText primary="DC Comics" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    {/* end Category */}
                    {/* Price slider */}
                    <ListItemText>
                        <div className="price-container">
                            <div className="price-filter">
                                <ListItemIcon>
                                    <EuroIcon />
                                </ListItemIcon>
                                <ListItemText primary="Prezzo" />
                            </div>
                            <div className="slider">
                                <Slider
                                    getAriaLabel={() => 'Price range'}
                                    value={price}
                                    onChange={handlePriceChange}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={price => `${price}€`}
                                />
                            </div>
                        </div>
                    </ListItemText>
                    {/* end Price slider */}
                </Collapse>
                {/* end Filter collapse */}

            </List>
        </div>

    );
}
