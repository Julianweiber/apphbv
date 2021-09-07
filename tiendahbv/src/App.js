import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';




function App() {
  return (
    <div className="App">
  <header className="App-header">

      <NavBar/>
   
      <ItemListContainer/>

    </header>
    </div>
  );
}

export default App;
