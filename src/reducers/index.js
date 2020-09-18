const current_pokemon = (current_pokemon = null, action)=>{
    if(action.type === 'POKEMON_SELECTED'){
        return action.payload
    }
}