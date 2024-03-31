function NavBar({pokemonList, onSelectPokemon}) {
    const handleClick = (index) => {
        const selectedPokemon = pokemonList[index];
        if (selectedPokemon.name === 'pikachu') {
            alert('pika pikachu !!!');
        } else {
            onSelectPokemon(index);
        }
    };

    return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <button key={index} onClick={() => handleClick(index)}>
                    {pokemon.name}
                </button>
            ))}
        </div>
    );
}

export default NavBar;
