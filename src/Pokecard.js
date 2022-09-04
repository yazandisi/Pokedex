import React from "react";
import Pokedex from "./Pokedex";
import "./Pokecard.css";

function Pokecard() {
  return (
    <div className="Pokecard-div">
      {Pokedex.map((p) => (
        <>
          <ul>
            <li>
              <h3>{p.name}</h3>
            </li>
            <li>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
              />
            </li>
            <li>Type: {p.type}</li>
            <li>EXP: {p.base_experience}</li>
          </ul>
        </>
      ))}
    </div>
  );
}

export default Pokecard;

//Pokedex[0].id
