import React from 'react';
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      
      <div className="app-body">
        <Filter />
        {/* Posts */}
        {/* Filter */}
      </div>
      {/* Footer */}
    </div>
  );
}

export default App;
