import React, { useState, useEffect } from 'react'
import './Feed.css'
import Product from './Product'

import { db } from './firebase.js'
import firebase from 'firebase/compat/app'

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
            )
        )
    }, [])

    const uploadProduct = e => {
        e.preventDefault()

        db.collection('products').add({
            name: "Primo prodotto",
            description: "Questo è il primo prodotto aggiunto nel db",
            image: "",
            price: 0,
            date: firebase.firestore.FieldValue.serverTimestamp()
        })
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

        </div>
    )
}

export default Feed
