import React, { useState } from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

function Product(props) {
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
                    image={`/images/${props.image}`}
                    alt={`"${props.name}" image`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        {props.description}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Product
