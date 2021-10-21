import React, { useState } from 'react'

import default_img from '../assets/default.jpg'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

function Product() {
    const [shadow, setShadow] = useState(1)

    return (
        <Box
            sx={{ boxShadow: shadow, minWidth: "240px" }}
            onMouseOver={() => setShadow(5)}
            onMouseOut={() => setShadow(1)}
            style={{ cursor: "pointer" }}
        >
            <Card>
                <CardMedia
                    component="img"
                    height="150"
                    image={default_img}
                    alt="default"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Nome oggetto
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Product
