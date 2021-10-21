import React, { useState, useEffect } from 'react'
import './Feed.css'
import Product from './Product'

import { db } from './firebase.js'

import Grid from '@mui/material/Grid'

function Feed() {
    const [products, setProducts] = useState([])

    /* when the page loads, connect to db */
    useEffect(() => {
        db.collection('products').onSnapshot(snapshot =>
            setProducts(
                snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data()
                    }
                ))
            ))
    }, [])

    const uploadProduct = e => {
        e.preventDefault()
    }

    return (
        <div className="feed">
            <Grid
                container
                spacing={3}
                justifyContent="space-between"
                direction="row"
                alignItems="center"
            >
                <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                    <Product />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                    <Product />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                    <Product />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                    <Product />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                    <Product />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                    <Product />
                </Grid>
            </Grid>

        </div>
    )
}

export default Feed
