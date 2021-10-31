import Card from './components/Card';
import './styles/App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [pokemon, setPokemon] = useState({})

  const gambs = []
  for (var i = 1; i < 150; i++) {
    gambs.push(i)
  }

  const searchPokemon = name => {
    console.log(name)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(e => {
        console.log(e)
        setPokemon(e.data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <input type="text" placeholder="Pesquisar..." onChange={e => searchPokemon(e.target.value)} />
      
      <div className="poke-container" id="poke-container">
        <Card pokemon={pokemon} />
      </div>
    </div>
  );
}

export default App;
