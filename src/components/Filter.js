import React, { useState } from 'react';
import './Filter.css'

import marvel_logo from './assets/marvel_logo.svg'
import dc_logo from './assets/dc_logo.svg'

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
/* import Button from '@material-ui/core/Button' */
import { InputAdornment, TextField } from '@mui/material'
import Collapse from '@mui/material/Collapse';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FilterListIcon from '@mui/icons-material/FilterList';
import CategoryIcon from '@mui/icons-material/Category';
import EuroIcon from '@mui/icons-material/Euro';
import ReorderIcon from '@mui/icons-material/Reorder';
/* import SearchIcon from '@mui/icons-material/Search' */

export default function Filter(props) {
    const [openFilter, setOpenFilter] = useState(false);
    const [openCategory, setOpenCategory] = useState(false);
    const [selectedMenuIndex, setSelectedMenuIndex] = useState(0)
    const [anchorEl, setAnchorEl] = useState(null)
    const [price, setPrice] = React.useState([0, 300]);

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

    const selectCategoryFilter = (category) => {
        const newFilters = {
            orderBy: props.filters.orderBy,
            category: category,
            price: props.filters.price
        }

        console.log(newFilters)
    }

    /* Menu interaction */
    const handleMenuItemClick = (e, index) => {
        setSelectedMenuIndex(index)
        setAnchorEl(null)

        const newOrderBy = (index === 0 ? "date desc" : index === 1 ? "price asc" : "price desc")
        const newFilters = {
            orderBy: newOrderBy,
            category: props.filters.category,
            price: props.filters.price
        }

        props.setFilters(newFilters)
    }

    const handleClickMenuListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    /* Price */
    const handlePriceChange = (e, value) => {
        let newPrice

        if(value === '')
            newPrice = [0, 500]
        else {
            if(e.target.id === 'price-min')
                newPrice = [value, price[1]]
            else
                newPrice = [price[0], value]
        }
        
        setPrice(newPrice)

        const newFilters = {
            orderBy: props.filters.orderBy,
            category: props.filters.category,
            price: {
                min: parseInt(newPrice[0]),
                max: parseInt(newPrice[1])
            }
        }

        props.setFilters(newFilters)
    };

    return (
        <div className="filter">
            <List
                sx={{ width: '100e%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="div"
                aria-labelledby="nested-list-filter"
            >
                {/* Filter collapse */}
                <ListItemButton onClick={handleFilterClick} className="filter-button">
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
                                style={{ display: "block", padding: "10px" }}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                    {/* end Order by */}
                    {/* Category */}
                    <ListItemButton onClick={handleCategoryClick} className="filter-button">
                        <ListItemIcon>
                            <CategoryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Categorie" />
                        {openCategory ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openCategory} timeout="auto" unmountOnExit>
                        <List component="div">
                            <div style={{ marginLeft: 10}} >
                                <ListItemButton sx={{ pl: 10 }} onClick={() => selectCategoryFilter("marvel")} >
                                    <ListItemIcon >
                                        <img src={marvel_logo} alt="Marvel" className="filter-item-logo" />
                                    </ListItemIcon>
                                    <ListItemText primary="Marvel" />
                                </ListItemButton>
                            </div>
                            <div style={{ marginLeft: 10}} >
                                <ListItemButton sx={{ pl: 10 }} onClick={() => selectCategoryFilter("dc_comics")} >
                                    <ListItemIcon>
                                        <img src={dc_logo} alt="DC" className="filter-item-logo" />
                                    </ListItemIcon>
                                    <ListItemText primary="DC Comics" />
                                </ListItemButton>
                            </div>
                        </List>
                    </Collapse>
                    {/* end Category */}
                    {/* Price */}
                    <ListItemText>
                        <div className="price-container">
                            <div className="price-filter">
                                <ListItemIcon>
                                    <EuroIcon />
                                </ListItemIcon>
                                <ListItemText primary="Prezzo" />
                            </div>
                            <div className="price-selector">
                                <div className="price-min">
                                    <TextField 
                                        id="price-min" 
                                        label="Da" 
                                        variant="outlined"
                                        type="number"
                                        onChange={(e) => handlePriceChange(e, e.target.value)} 
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">€</InputAdornment>,
                                        }}
                                    />
                                </div>
                                <div className="price-max">
                                    <TextField 
                                        id="price-max" 
                                        label="A" 
                                        variant="outlined"
                                        type="number"
                                        onChange={(e) => handlePriceChange(e, e.target.value)}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">€</InputAdornment>,
                                        }} 
                                    />
                                </div>
                            </div>
                        </div>
                    </ListItemText>
                    {/* end Price */}
                    {/* <div className="button-container">
                        <Button 
                            variant="contained" 
                            color="primary" 
                            disableElevation 
                            endIcon={<SearchIcon />}
                            onClick={handlePriceChange}
                        >
                            cerca
                        </Button>
                    </div> */}
                </Collapse>
                {/* end Filter collapse */}
            </List>
        </div>

    );
}
