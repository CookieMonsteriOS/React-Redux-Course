import * as PlayerActionTypes from '../actiontypes/player.js'

// Simply put this is a factory to create to create and dispatch actions to the reducers
//Actions are created from here and are dispatched from the actions sore and that will be handled by the reducer
//These need to be dispatched to work
export const addPlayer = name => {
    return {
        type:PlayerActionTypes.ADD_PLAYER,
        name
    };
}
//When this is handle to change state it is done handled by switch block in the reducer and the parameters it needs to work
export const removePlayer = index =>{
  return {type:PlayerActionTypes.REMOVE_PLAYER, index};
}
//Exporting update player score
export const updatePlayerScore = (index,score) => {
    return {type:PlayerActionTypes.UPDATE_PLAYER_SCORE, index,score};
}
