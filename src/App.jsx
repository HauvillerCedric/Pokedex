/*import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';*/
import './App.css';
import PokemonCard from './components/PokemonCard';
import {useState} from "react";

function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);

    const pokemonList = [
        {
            name: "bulbasaur",
            imgSrc:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
            name: "charmander",
            imgSrc:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        },
        {
            name: "squirtle",
            imgSrc:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        },
        {
            name: "pikachu",
            imgSrc:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        },
        {
            name: "mew",
        },
    ];

    const handleNextClick = () => {
        if (pokemonIndex < pokemonList.length - 1) {
            setPokemonIndex(pokemonIndex + 1);
        }
    };

    const handlePreviousClick = () => {
        if (pokemonIndex > 0) {
            setPokemonIndex(pokemonIndex - 1);
        }
    };

    return (
        <>
            <div>
                <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
                <button onClick={handlePreviousClick}>Précédent</button>
                <button onClick={handleNextClick}>Suivant</button>
            </div>
        </>
    );
}

export default App;
