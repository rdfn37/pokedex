import Card from './Card';
import axios from 'axios';
import { useState } from 'react';

const IndexPage = () => {
    const [pokemon, setPokemon] = useState({})

    const [pokemonName, setPokemonName] = useState('')
  
    const gambs = []
    for (var i = 1; i < 150; i++) {
      gambs.push(i)
    }
  
    const searchPokemon = name => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(e => {
          setPokemon(e.data)
        })
        .catch(e => {
          alert('pokemon não existente')
        })
    }
  
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <input className="rounded" id="input" type="text" placeholder="Pesquisar..." onChange={e => setPokemonName(e.target.value.toLowerCase())} />
        <button className='mx-3 rounded btn-primary' onClick={e => searchPokemon(pokemonName)}> Enviar </button>
        <div className="poke-container" id="poke-container">
            <Card pokemon={pokemon} />
        </div>
      </div>
    );
  }
  
  export default IndexPage;