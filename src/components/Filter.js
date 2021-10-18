import React from 'react';
import './Filter.css'
import marvel_logo from './../assets/marvel_logo.svg'
import dc_logo from './../assets/dc_logo.svg'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Slider from '@mui/material/Slider';
import Collapse from '@mui/material/Collapse';

import { grey } from '@mui/material/colors';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FilterListIcon from '@mui/icons-material/FilterList';
import CategoryIcon from '@mui/icons-material/Category';
import EuroIcon from '@mui/icons-material/Euro';

export default function Filter() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(open => !open);
  };

  const [price, setPrice] = React.useState([0, 100]);

  const handlePriceChange = (event, newPrice) => {
    setPrice(newPrice);
  };

  return (
      <div className="filter">
          <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="div"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        <FilterListIcon />
                        <h3 className="filter-title">Filtri</h3>
                    </ListSubheader>
                }
                >
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Categorie" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 10 }}>
                        <ListItemIcon >
                            <img src={marvel_logo} alt="Marvel" className="filter-item-logo"/>
                        </ListItemIcon>
                        <ListItemText primary="Marvel" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 10 }}>
                        <ListItemIcon>
                            <img src={dc_logo} alt="DC" className="filter-item-logo"/>
                        </ListItemIcon>
                        <ListItemText primary="DC Comics" />
                    </ListItemButton>
                    </List>
                </Collapse>
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
            </List>
      </div>
    
  );
}
