import React from 'react'
import './Feed.css'
import Product from './Product'

import Grid from '@mui/material/Grid'

import {
    Link
} from 'react-router-dom'

function Feed({ products }) {
    /* const uploadProduct = () => {
        db.collection('products').add({
            name: 'Terzo prodotto',
            description: 'Questo è il terzo prodotto per il testing',
            image: 'default.jpg',
            price: 0,
            date: firebase.firestore.FieldValue.serverTimestamp()
        })
    } */

    return (
        <div className="feed">
            <Grid
                container
                spacing={3}
                justifyContent="space-evenly"
                direction="row"
                alignItems="center"
            >
                {
                    products.map((elem, index) => {
                        return (
                            <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
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
            {/* <Button onClick={uploadProduct} variant="contained">Prova</Button> */}
        </div>
    )
}

export default Feed
