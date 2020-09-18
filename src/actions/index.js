const choose_pokemon = (pokemon_name)=>{
    return {
        type: 'POKEMON_SELECTED',
        payload: pokemon_name
    }
}

const display_default_action = ()=>{
    return {
        type:'DISPLAY_DEFAULT_LIST',
    }
}

export {
    choose_pokemon,
    display_default_action
}