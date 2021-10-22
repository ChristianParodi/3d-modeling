import React from 'react';
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import Footer from './components/Footer';
import Feed from './components/Feed';

import { Container } from '@mui/material'

function App() {
  return (
    <div className="app">
      <Header />

      <Container fixed maxWidth="xl" style={{ backgroundColor: "white", height: "100vh" }}>
        <div className="app-body">
          <Feed />
          <Filter />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
