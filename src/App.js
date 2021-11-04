import React, { useState, useEffect } from 'react';
import './App.css';
import Slider from './components/Slider'
import ProductFeed from './components/ProductFeed';
import Header from './components/Header';
import Footer from './components/Footer';
import Feed from './components/Feed';
import Contacts from './Contacts';
import ProductPage from './components/ProductPage';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { db } from './components/firebase.js'

import { Container } from '@mui/material'

function App() {
  const [inputValue, setInputValue] = useState("")
  const [products, setProducts] = useState([])

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

  /* when the page loads, connect to db and load the latest products */
  useEffect(() => {
    loadProducts()
  }, [])

  useEffect(() => {
    loadProducts(inputValue)
  }, [inputValue])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <div className="app">
            <Header inputValue={inputValue} setInputValue={setInputValue} />

            <Container id="app-wrapper" fixed maxWidth="xl" style={{ backgroundColor: "white", paddingBottom: "5px" }}>
              <Slider />
              <div className="app-body">
                <Feed products={products} />
              </div>
            </Container>
            <Footer />
          </div>
        </Route>
        <Route path="/contacts" component={() => <Contacts />}>
        </Route>
        <Route path="/p/:productid" component={() => <ProductPage />} >
        </Route>
        <Route to="/p/" component={() => <ProductFeed />}>
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
