import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/PokemonPage.css'

const CardPage = () => {
    const [pokemon, setPokemon] = useState({})

    const [pokemonName, setPokemonName] = useState(window.location.pathname.substring(1))


    const getPokemon = () => {
        if (pokemonName) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                .then(e => {
                    setPokemon(e.data)
                })
        }
    }


    useEffect(() => {
        getPokemon()
    }, [])

    let typeColor = 'o'

    
    if (pokemon.types?.[0]?.type?.name == 'fire') {
        typeColor = 'fire'
    } else if(pokemon.types?.[0]?.type?.name == 'bug') {
        typeColor = 'bug'
    } else if(pokemon.types?.[0]?.type?.name == 'dragon') {
        typeColor = 'dragon'
    } else if(pokemon.types?.[0]?.type?.name == 'electric') {
        typeColor = 'electric'
    } else if(pokemon.types?.[0]?.type?.name == 'fighting') {
        typeColor = 'fighting'
    } else if(pokemon.types?.[0]?.type?.name == 'flying') {
        typeColor = 'flying'
    } else if(pokemon.types?.[0]?.type?.name == 'ghost') {
        typeColor = 'ghost'
    } else if(pokemon.types?.[0]?.type?.name == 'grass') {
        typeColor = 'grass'
    } else if(pokemon.types?.[0]?.type?.name == 'ground') {
        typeColor = 'ground'
    } else if(pokemon.types?.[0]?.type?.name == 'rock') {
        typeColor = 'rock'
    } else if(pokemon.types?.[0]?.type?.name == 'ice') {
        typeColor = 'ice'
    } else if(pokemon.types?.[0]?.type?.name == 'poison') {
        typeColor = 'poison'
    } else if(pokemon.types?.[0]?.type?.name == 'psychic') {
        typeColor = 'psychic'
    } else if(pokemon.types?.[0]?.type?.name == 'water') {
        typeColor = 'water'
    }


    return (
        <React.Fragment>
            <header className='pokemonPageHeader text-center'>
                <h1>{pokemonName[0].toUpperCase() + pokemonName.substring(1)}</h1>
            </header>

            <div className={`pokemonPageMain my-5 rounded p-1 ${typeColor}`}>

                <div className={`pokemonPageImg ${pokemonName}-img mx-5`}>
                    <img src={pokemon.sprites?.front_default} alt={pokemonName} />
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
                

                <div className={`pokemonPageStats ${pokemonName}-stats d-block`}>
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
                    </table>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CardPage