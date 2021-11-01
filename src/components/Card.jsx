import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

const Card = (props) => {

    const pokemon = props.pokemon

    
    if (pokemon.name) {
        return (
            <Link to={pokemon.name} key={pokemon.id}>
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