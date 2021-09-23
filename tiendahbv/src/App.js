import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import ItemList from './components/NavBar/ItemListContainer/ItemList';
import { useState,useEffect } from 'react';


function App() {
  return (
    <div className="App">
  <header className="App-header">

      <NavBar/>
   
      <ItemListContainer/>
<ItemList/>
    </header>
    </div>
  );
}

export default App;