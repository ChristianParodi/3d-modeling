import React from 'react'
import './Feed.css'
import Product from './Product'

import Grid from '@mui/material/Grid'

import {
    Link
} from 'react-router-dom'

function Feed({ products }) {
    return (
        <div className="feed">
            <Grid
                container
                spacing={3}
                justifyContent="space-around"
                direction="row"
                alignItems="center"
                sx={{ marginTop: "30px" }}
            >
                {
                    products.map((elem, index) => {
                        return (
                            <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={3}>
                                <Link to={`/p/${elem.id}`}>
                                    <Product
                                        id={elem.id}
                                        name={elem.data.name}
                                        description={elem.data.description}
                                        image={elem.data.image}
                                        price={elem.data.price}
                                        date={elem.data.date}
                                    />
                                </Link>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default Feed
