const choose_pokemon = (pokemon_name)=>{
    return {
        type: 'POKEMON_SELECTED',
        payload: pokemon_name
    }
}

export {
    choose_pokemon
}