import {combineReducers} from 'redux'

const current_pokemon_reducer = (current_pokemon = null, action)=>{
    if(action.type === 'POKEMON_SELECTED'){
        return action.payload
    }

    return current_pokemon
}

export default combineReducers({
    current_pokemon:current_pokemon_reducer
})