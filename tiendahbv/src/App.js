import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { useState } from 'react'


function App() {
  return (
    <div className="App">
  <header className="App-header">

      <NavBar/>

     <ItemCount inicial={1} max={20}/>
   
      <ItemListContainer/>

    </header>
    </div>
  );
}

export default App;
