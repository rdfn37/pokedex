import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import axios from "axios";


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
    

    useEffect( () => {
        getPokemon()
    }, [])


    return (
        <React.Fragment>
            <div>
                <h1>Teste {pokemonName}</h1>
                <div>
                    { <img src={pokemon.sprites?.front_default} alt={pokemonName} /> }
                </div>
            </div>
        </React.Fragment>
    )
}

export default CardPage