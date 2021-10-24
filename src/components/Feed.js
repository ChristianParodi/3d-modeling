import React, { useState, useEffect } from 'react'
import './Feed.css'
import Product from './Product'

import { db } from './firebase.js'

import Grid from '@mui/material/Grid'
import { FireSQL } from 'firesql'

function Feed({ searched }) {
    const [products, setProducts] = useState([])

    /* const uploadProduct = () => {
        db.collection('products').add({
            name: 'Terzo prodotto',
            description: 'Questo è il terzo prodotto per il testing',
            image: 'default.jpg',
            price: 0,
            date: firebase.firestore.FieldValue.serverTimestamp()
        })
    } */

    const loadProducts = async(searchValue = "") => {
        const fireSQL = new FireSQL(db)
        let query = `SELECT * FROM products`
        if(searchValue !== '')
            query += ` WHERE name LIKE '${searchValue}%'`
            
        const documents = await fireSQL.query(query, { includeId: 'id'})

        const docs = documents.map(doc => (
            {
                id: doc.id,
                data: doc
            }
        ))

        docs.map(doc => delete doc.data['id'])

        setProducts(
            docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data
                }
            ))
        )
    }
/* when the page loads, connect to db and load the latest products */
    useEffect(() => {
        /* db.collection('products').orderBy('date', 'desc').onSnapshot(snapshot =>
            setProducts(
                snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data()
                    }
                ))
            )
        ) */
        loadProducts()
    }, [])

    useEffect(() => {
        if(searched === ''){
            loadProducts()
            return
        }
            
        
        /*
            Firestore does'nt support indexing, so 
            the solution is to search for the name client side.
            This isn't practical but our database is not so huge
        */
        const fetchData = async () => {
            const allProducts = await db.collection('products').get()
            const searchedArray = []
            allProducts.docs.forEach(doc => {
                if((doc.data().name).includes(searched))
                    searchedArray.push({ id: doc.id, data: doc.data() })
            })
            
            setProducts(searchedArray)
        }
        
        fetchData()
    }, [searched])
    
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
