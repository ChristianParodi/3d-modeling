import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useParams } from 'react-router'
import { Container, Grid, Typography } from '@mui/material'

import { db } from './firebase'

function ProductPage() {
    const { productid } = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        db.collection('products').doc(productid).get()
            .then(snapshot =>
                setProduct(
                    snapshot.data()
                )
            )
    }, [productid])

    console.log(product)
    return (
        <div>
            <Header />
            <Container id="app-product-wrapper" fixed maxWidth="xl" style={{ backgroundColor: "white", paddingBottom: "5px" }}>
                <div className="app-body">
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        {product && (
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <div className="img-container">
                                    <img src={`/images/${product.image}`} alt={`${product.name}`} />
                                </div>
                                <Typography variant="h4" component="h4">
                                    {product.name}
                                </Typography>
                            </Grid>
                        )}
                    </Grid>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default ProductPage
