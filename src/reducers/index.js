import {combineReducers} from 'redux'

const jibberish = [
    {
        name:'Charizard',
        type:'fire'
    },
    {
        name:'Pikachu',
        type:'Electric'
    },
    {
        name:'Squirtle',
        type:'Water'
    }
]

const current_pokemon_reducer = (current_pokemon = 'null', action)=>{
    if(action.type === 'POKEMON_SELECTED'){
        return action.payload
    }

    return current_pokemon
}

const default_song_list_reducer = (list = [{name:'Trump'}], action)=>{
    if(action.type ==='DISPLAY_DEFAULT_LIST'){
        return jibberish
    }

    return list
}

export default combineReducers({
    current_pokemon:current_pokemon_reducer,
    display_default:default_song_list_reducer
})