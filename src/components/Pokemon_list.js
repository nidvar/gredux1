import React from 'react';
import {connect} from 'react-redux';
import {display_default_action, choose_pokemon} from '../actions'

const Pokemon_list = (props)=>{
    props.display_default_action();
    return(
        <div>
            <h1>Pokemon List</h1><br />
            <br />
            <button onClick={props.choose_pokemon}>Choose Pokemon</button><br />


            {props.display_default.map(a=>{return <p key={Math.random()} onClick={()=>{props.choose_pokemon(a.name)}}>{a.name}
            </p>})}

            <hr />
            <h1>Current Pokemon: {props.current_pokemon}</h1>
        </div>
    )
}

const mapStateToProps = (state)=>{
    console.log(state)
    return state
}


export default connect(
    mapStateToProps,
    {
        display_default_action:display_default_action,
        choose_pokemon: choose_pokemon
    }
    )(Pokemon_list)