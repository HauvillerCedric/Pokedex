function NavBar({pokemonList, onSelectPokemon}) {
    return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <button key={index} onClick={() => onSelectPokemon(index)}>
                    {pokemon.name}
                </button>
            ))}
        </div>
    );
}

export default NavBar;
