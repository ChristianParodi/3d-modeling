import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Product from './Product'
import Filter from './Filter'
import './ProductPage.css'

import {
    Container,
    Grid
} from '@mui/material'

import { Link } from 'react-router-dom'
import { db } from './firebase'

function ProductFeed() {
    const [inputValue, setInputValue] = useState("")
    const [products, setProducts] = useState([])
    const [filters, setFilters] = useState({ orderBy: "date desc", category: undefined, price: {min: 0, max: 300}})

    const loadProducts = async (searchValue = "", selectedFilters = null) => {
        const allProducts = await db.collection('products').get()

        if (searchValue === '' && selectedFilters === null) {
        const allProducts = await db.collection('products').get()
        setProducts(
            allProducts.docs.map(doc => (
            {
                id: doc.id,
                data: doc.data()
            }
            ))
        )
        return
        } else if (searchValue !== '' && selectedFilters === null) {
        /*
            Else we have to include all those docs where the name 
            contains searchValue. Ehiter lower or uppercase
        */
        const newDocs = allProducts.docs.map(doc => {
            if ((doc.data().name).includes(searchValue) ||
            (doc.data().name).includes(searchValue.charAt(0).toUpperCase() + searchValue.substr(1)))
            return {
                id: doc.id,
                data: doc.data()
            }
            else
            return {}
        }).filter(value => Object.keys(value).length !== 0)

        setProducts(newDocs)
        return
        } else if (searchValue === '' && selectedFilters !== null) {
        const orderBy = selectedFilters.orderBy.split(" ")

        db.collection('products')
            .orderBy(orderBy[0], orderBy[1])
            .onSnapshot(snapshot =>
            setProducts(
                snapshot.docs.map(doc => {
                if (doc.data().price >= selectedFilters.price.min &&
                    doc.data().price <= selectedFilters.price.max)
                    return {
                    id: doc.id,
                    data: doc.data()
                    }
                else
                    return {}
                }).filter(value => Object.keys(value).length !== 0)
            )
            )
        }
    }

    useEffect(() => {
    loadProducts()
    }, [])

    useEffect(() => {
        loadProducts(inputValue)
    }, [inputValue])

    useEffect(() => {
        loadProducts('', filters)
    }, [filters])

    return (
        <div> 
            <Header inputValue={inputValue} setInputValue={setInputValue} />

            <Container id="app-product-page-wrapper" fixed maxWidth="xl" style={{ backgroundColor: "white", paddingBottom: "5px", height: "100%", minHeight: "100vh", paddingTop: 20 }}>
                <div className="app-product-feed-body">
                    <Grid 
                        container 
                        spacing={3}
                        justifyContent="space-evenly"
                        alignItems="center"
                        direction="columnt"
                    >
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Filter filters={filters} setFilters={setFilters} />
                        </Grid>
                        {
                                products.map((elem, index) => {
                                    return (
                                        <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={3} sx={{ mb: 2 }}>
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
            </Container>
            <Footer />
        </div>
    )
}

export default ProductFeed
