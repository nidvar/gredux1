const choose_pokemon = (pokemon_name)=>{
    return {
        type: 'POKEMON_SELECTED',
        pokemon_name: pokemon_name
    }
}

export {
    choose_pokemon
}