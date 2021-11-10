import Card from './Card';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { Link } from 'react-router-dom'
import Logo from '../imgs/logo.svg.png'

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
      <header className='d-inline-flex pokemonPageHeader text-center justify-content-center'>
        <Link to='/'>
          <img className='' id='logo' src={Logo} alt="Logo" />
        </Link>
        <h1>Pokedex</h1>
      </header>
      <input className="rounded m-2" id="input" type="text" placeholder="Pesquisar..." onChange={e => setPokemonName(e.target.value.toLowerCase())} />
      <button className='mx-3 rounded btn-primary' onClick={e => searchPokemon(pokemonName)}> Enviar </button>
      <div className="poke-container" id="poke-container">
        <Card pokemon={pokemon} />
      </div>
    </div>
  );
}

export default IndexPage;