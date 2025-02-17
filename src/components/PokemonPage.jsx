import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/PokemonPage.css'
import { render } from "react-dom";
import { Link } from 'react-router-dom'
import Logo from '../imgs/logo.svg.png'


const CardPage = (props) => {
    const [pokemon, setPokemon] = useState({})

    const [pokemonName, setPokemonName] = useState(window.location.pathname.substring(1))

    const [pokemonEvolutions, setPokemonEvolutions] = useState([])

    const [newPokemon, setNewPokemon] = useState('')


    const getPokemon = () => {
        if (pokemonName) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                .then(e => {
                    setPokemon(e.data)
                })
        }
    }

    const getPokemonEvolutions = () => {
        let pokemonEvolutions = []
        if (pokemonName) {
            axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
                .then(e => {
                    axios.get(`${e.data.evolution_chain.url}`)
                        .then(e => {
                            axios.get(`https://pokeapi.co/api/v2/pokemon/${e.data.chain.species.name}`)
                                .then(e => {
                                    pokemonEvolutions = [...pokemonEvolutions, e.data]
                                    setPokemonEvolutions(pokemonEvolutions)
                                })
                            if (e.data.chain.evolves_to) {
                                const evolutionsArray = e.data.chain.evolves_to

                                for (let i = 0; i < evolutionsArray.length; i++) {
                                    axios.get(`https://pokeapi.co/api/v2/pokemon/${e.data.chain.evolves_to[i].species.name}`)
                                        .then(e => {
                                            pokemonEvolutions = [...pokemonEvolutions, e.data]
                                            setPokemonEvolutions(pokemonEvolutions)
                                        })
                                    //////////////////////////////////////////////////////////
                                    if (e.data.chain.evolves_to[i].evolves_to) {
                                        const evolutionsArray = e.data.chain.evolves_to[i].evolves_to

                                        for (let ii = 0; ii < evolutionsArray.length; ii++) {
                                            axios.get(`https://pokeapi.co/api/v2/pokemon/${e.data.chain.evolves_to[i].evolves_to[ii]?.species?.name}`)
                                                .then(e => {
                                                    pokemonEvolutions = [...pokemonEvolutions, e.data]
                                                    setPokemonEvolutions(pokemonEvolutions)
                                                })
                                        }
                                    }
                                }
                            }

                            /*if (e.data.chain.evolves_to[0].evolves_to) {
                                const evolutionsArray = e.data.chain.evolves_to[0].evolves_to

                                for (let i = 0; i < evolutionsArray.length; i++) {
                                    axios.get(`https://pokeapi.co/api/v2/pokemon/${e.data.chain.evolves_to[0].evolves_to[i]?.species?.name}`)
                                        .then(e => {
                                            pokemonEvolutions = [...pokemonEvolutions, e.data]
                                            setPokemonEvolutions(pokemonEvolutions)
                                        })
                                }

                            }*/
                        })
                })
        }
    }

    useEffect(() => {
        getPokemonEvolutions()
    }, [])

    useEffect(() => {
        getPokemon()
    }, [])

    pokemonEvolutions.sort(function (a, b) { return a.id - b.id })

    const evolutions = pokemonEvolutions.map(evolution => {
        return (
            <Link id='link' onClick={() => { window.location.replace(evolution.name) }} to={evolution.name} key={evolution.id}>
                <Card pokemon={evolution} />
            </Link>
        )
    })

    const searchPokemon = newPokemon => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${newPokemon}`)
            .then(e => {
                window.location.pathname = e.data.name
            })
            .catch(e => {
                alert('Pokemon não existente')
            })

    }

    let typeColor = 'o'
    if (pokemon.types?.[0]?.type?.name == 'fire') {
        typeColor = 'fire'
    } else if (pokemon.types?.[0]?.type?.name == 'bug') {
        typeColor = 'bug'
    } else if (pokemon.types?.[0]?.type?.name == 'dragon') {
        typeColor = 'dragon'
    } else if (pokemon.types?.[0]?.type?.name == 'electric') {
        typeColor = 'electric'
    } else if (pokemon.types?.[0]?.type?.name == 'fighting') {
        typeColor = 'fighting'
    } else if (pokemon.types?.[0]?.type?.name == 'flying') {
        typeColor = 'flying'
    } else if (pokemon.types?.[0]?.type?.name == 'ghost') {
        typeColor = 'ghost'
    } else if (pokemon.types?.[0]?.type?.name == 'grass') {
        typeColor = 'grass'
    } else if (pokemon.types?.[0]?.type?.name == 'ground') {
        typeColor = 'ground'
    } else if (pokemon.types?.[0]?.type?.name == 'rock') {
        typeColor = 'rock'
    } else if (pokemon.types?.[0]?.type?.name == 'ice') {
        typeColor = 'ice'
    } else if (pokemon.types?.[0]?.type?.name == 'poison') {
        typeColor = 'poison'
    } else if (pokemon.types?.[0]?.type?.name == 'psychic') {
        typeColor = 'psychic'
    } else if (pokemon.types?.[0]?.type?.name == 'water') {
        typeColor = 'water'
    }


    return (
        <React.Fragment>
            <header className='d-inline-flex pokemonPageHeader text-center justify-content-center'>
                <Link to='/'>
                    <img className='' id='logo' src={Logo} alt="Logo" />
                </Link>
                <h1 className=''>{pokemonName[0].toUpperCase() + pokemonName.substring(1)}</h1>
            </header>
            <input className="rounded m-2" id="input" type="text" placeholder="Pesquisar..." onChange={e => setNewPokemon(e.target.value.toLowerCase())} />
            <button className='mx-3 rounded btn-primary' onClick={e => searchPokemon(newPokemon)}> Enviar </button>

            <div className={`pokemonPageMain my-1 rounded p-1 ${typeColor}`}>

                <div className={`d-flex align-self-start justify-content-start pokemonPageImg ${pokemonName}-img me-5`}>
                    <img className='' src={pokemon.sprites?.front_default} alt={pokemonName} />
                </div>

                <div className={`pokemonPageInfo ${pokemonName}-info text-center`}>

                    <div className={`pokemonPageId ${pokemonName}-id`}>
                        <h6>ID: {pokemon.id}</h6>
                    </div>
                    <hr />

                    <div className={`pokemonPageType ${pokemonName}-type`}>
                        <div className=''>
                            {pokemon.types?.[0]?.type?.name} {' / ', pokemon.types?.[1]?.type?.name}
                        </div>
                    </div>
                    <hr />

                    <div className={`pokemonPageAbilities ${pokemonName}-abilities `}>
                        <h6 className='mx-2 align-self-center'>Abilities</h6>
                        <ul className='list-group'>
                            <li className='list-group-item'>1 - {pokemon.abilities?.[0]?.ability?.name}</li>
                            <li className='list-group-item'>2 - {pokemon.abilities?.[1]?.ability?.name}</li>
                        </ul>
                    </div>
                </div>


                <div className={`pokemonPageStats ${pokemonName}-stats align-self-center`}>
                    <table className='bg-dark rounded table table-danger'>
                        <tr className="table table-danger col">
                            <td className="text-light table table-danger">
                                HP - {pokemon.stats?.[0]?.base_stat}
                            </td>
                        </tr>

                        <tr className="table table-danger">
                            <td className="text-light table table-danger">
                                Attack - {pokemon.stats?.[1]?.base_stat}
                            </td>
                        </tr>

                        <tr className="table table-danger">
                            <td className="text-light table table-danger">
                                Defense - {pokemon.stats?.[2]?.base_stat}
                            </td>
                        </tr>

                        <tr className="table table-danger">
                            <td className="text-light table table-danger">
                                Sp. Attack - {pokemon.stats?.[3]?.base_stat}
                            </td>
                        </tr>

                        <tr className="table table-danger">
                            <td className="text-light table table-danger">
                                Sp. Defense - {pokemon.stats?.[4]?.base_stat}
                            </td>
                        </tr>

                        <tr className="table table-danger">
                            <td className="text-light table table-danger">
                                Speed - {pokemon.stats?.[5]?.base_stat}
                            </td>
                        </tr>

                        <tr className='table table-danger'>
                            <td className='text-light table table-danger'>
                                Total - {pokemon.stats?.[0]?.base_stat + pokemon.stats?.[1]?.base_stat + pokemon.stats?.[2]?.base_stat + pokemon.stats?.[3]?.base_stat + pokemon.stats?.[4]?.base_stat + pokemon.stats?.[5]?.base_stat}
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="pokemonPageEvolutionChain align-items-center">
                    {evolutions}
                </div>
            </div>
        </React.Fragment>
    )
}

export default CardPage