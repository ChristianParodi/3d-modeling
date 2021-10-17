import React from 'react';
import './Filter.css'
import marvel_logo from './../assets/marvel_logo.svg'
import dc_logo from './../assets/dc_logo.svg'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FilterListIcon from '@mui/icons-material/FilterList';
import CategoryIcon from '@mui/icons-material/Category';

export default function Filter() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(open => !open);
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
                        <span className="filter-title">Filtro</span>
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
            </List>
      </div>
    
  );
}
