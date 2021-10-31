import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = (props) => {
    const [pokemon, setPokemon] = useState({})
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.index}`).then( response => {
            setPokemon(response.data)
            console.log(response)
        })
    }, [])

    console.log(pokemon)
    if (pokemon.name) {
        return (
            <div className="pokemon">
                <div className="image-container">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
                <div className="info">
                    <span className="number">
                        #{pokemon.id}
                    </span>
                    <h3 className="name">
                        {pokemon.name}
                    </h3>
                    {pokemon.types.map( data => (
                        <small className="type">
                            Type: <span>{data.type.name}</span> 
                        </small>
                    ))}
                    
                </div>
            </div>
        )
    } else {
        return (<div>aaaaaaaaaaaaaa</div>)
    }
}

export default Card