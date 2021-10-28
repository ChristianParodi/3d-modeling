import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Box } from '@mui/material'

function Slider()
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: "deafult.jpg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: "defalt.jpg"
        }
    ]

    return (
        <div style={{ backgroundColor: "white", paddingTop: "10px" }} className="slide-container">
            <Carousel animation="slide">
                {
                    items.map((item, index) => <Item key={index} item={item} />)
                }
            </Carousel>
        </div>
    )
}

function Item(props)
{
    return (
        <Box component="div" sx={{ height: "350px"}} className="slide-box">
            <img src="/images/slider_image.jpg" alt="default" height="400" width="100%"/>
        </Box>
    )
}

export default Slider
