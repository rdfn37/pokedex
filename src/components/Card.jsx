import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

const Card = (props) => {

    const pokemon = props.pokemon

    let typeColor = ''

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

    const refreshPage = () => {
        window.location.reload()
    }

    if (pokemon.name) {
        return (
            <Link id='link' to={pokemon.name} key={pokemon.id}>
                <div className={`pokemon ${typeColor}`}>
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
                        <ul>
                            {pokemon.types.map(data => (
                                <li className="type" key={pokemon.id}>
                                    Type: <span>{data.type.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Link>
        )
    } else {
        return (<div></div>)
    }
}

export default Card