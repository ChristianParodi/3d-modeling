import React, { useState } from 'react';
import './App.css';
import Slider from './components/Slider'
import Filter from './components/Filter';
import Header from './components/Header';
import Footer from './components/Footer';
import Feed from './components/Feed';

import { Container } from '@mui/material'

function App() {
  const [inputValue, setInputValue] = useState("")

  return (
    <div className="app">
      <Header inputValue={inputValue} setInputValue={setInputValue}/>
      
      <Container fixed maxWidth="xl" style={{ backgroundColor: "white", height: "100vh" }}>
        <Slider />
        <div className="app-body">
          <Feed searched={inputValue}/>
          <Filter />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
