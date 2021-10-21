import React from 'react';
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import Feed from './components/Feed';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app-body">
        <Filter />
        <Feed />
        {/* Filter */}
      </div>
      {/* Footer */}
    </div>
  );
}

export default App;
