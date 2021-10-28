import React from 'react'
import './Feed.css'
import Product from './Product'

import Grid from '@mui/material/Grid'

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
                justifyContent="space-between"
                direction="row"
                alignItems="center"
            >
                {
                    products.map((elem, index) => {
                        return (
                            <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
                                <Product
                                    name={elem.data.name}
                                    description={elem.data.description}
                                    image={elem.data.image}
                                    price={elem.data.price}
                                    date={elem.data.date}
                                />
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
