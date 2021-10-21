import React from 'react'
import './Feed.css'
import Product from './Product'

import Grid from '@mui/material/Grid'

function Feed() {

    return (
        <div className="feed">
            <Grid
                container
                spacing={3}
                justifyContent="space-between"
                direction="row"
                alignItems="center"
            >
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Product />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Product />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Product />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Product />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Product />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Product />
                </Grid>
            </Grid>

        </div>
    )
}

export default Feed
