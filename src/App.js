import Card from './components/Card';
import './styles/App.css';
import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

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
        alert('pokemon não existente')
      })
  }



  return (
    <div className="App">
      <h1>Pokedex</h1>
      <input id="input" type="text" placeholder="Pesquisar..." onChange=''/>
      <button className='mx-3 rounded btn-primary' onClick={e => searchPokemon(document.getElementById('input').value.toLowerCase())}> Enviar </button>
      <div className="poke-container" id="poke-container">
        <Card pokemon={pokemon} />
      </div>
    </div>
  );
}

export default App;
