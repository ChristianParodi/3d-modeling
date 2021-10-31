import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useParams } from 'react-router'
import { Container, Grid, Typography } from '@mui/material'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { db } from './firebase'

function ProductPage() {
    const [image, setImage] = useState()
    const [product, setProduct] = useState()
    const { productid } = useParams()

    useEffect(() => {
        let isMounted = true
        db.collection('products').doc(productid).onSnapshot(snapshot => {
            if(isMounted)
                setProduct(
                    snapshot.data()
                )
        })

        return () => { isMounted = false } 
    }, [productid])

    useEffect(() => {
        if(product?.image){
            setImage(product.image[0])
        } 
    }, [product])

    return (
        <div>
            <Header />
            <Container id="app-product-wrapper" fixed maxWidth="xl" style={{ backgroundColor: "white", paddingBottom: "5px", height: "100vh" }}>
                <div className="app-product-body">
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justifyContent="space-between"
                        style={{ paddingTop: "10px" }}
                    >
                        {product && (
                            <>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                                    <div className="img-container">
                                        <img src={`/images/${image}`} alt={`${product.name}`} style={{ objectFit: "cover", maxHeight: "600px", height: "600px", width: "100%"}} />
                                    </div>
                                    <ImageList sx={{ width: "100%", height: "100%" }} cols={product.image.length} rowHeight={200}>
                                        {product.image.map((item) => (
                                            <ImageListItem key={item} style={{ cursor: "pointer" }}>
                                                <img
                                                    src={`/images/${item}`}
                                                    srcSet={`/images/${item}`}
                                                    alt={item}
                                                    loading="lazy"
                                                    style={{ height: 200 }}
                                                    onClick={() => setImage(item)}
                                                />
                                            </ImageListItem>
                                        ))}
                                    </ImageList>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                                    <Typography variant="h4" component="h4">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="h6" component="h6">
                                        € {product.price}
                                    </Typography>
                                    <Typography variant="p" component="p">
                                        Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                                        sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, 
                                        nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit 
                                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                                        sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt 
                                        mollit anim id est laborum.
                                    </Typography>
                                </Grid>
                            </>
                        )}
                    </Grid>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default ProductPage
