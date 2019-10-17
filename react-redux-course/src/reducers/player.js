import * as PlayerActionTypes from '../actiontypes/player.js'

const initialState = [
    {
        name: 'Jim Hoskins',
        score: 31,
    },
    {
        name: 'Andrew Chalkley',
        score: 20,
    },
    {
        name: 'Alena Holligan',
        score: 50,
    },
]
//...state is the initial state of the player - switch on acton to - pure function doesn't mutate anything including current state.
//action - is the action which has been taken.
export default function Player(state=initialState,action) {
switch(action.type){
    case PlayerActionTypes.ADD_PLAYER:
        return [...state, {name: action.name,score: 0}]
    case PlayerActionTypes.REMOVE_PLAYER:
        return [...state.slice(0,action.index), ...state.slice(action.index +1)];
    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
        return state.map((player,index) =>{
            if(index === action.index){
                return {
                    ...player,
                    score: player.score + action.score
                }
            }
            return player.score;
        });
    default:
        return state;

}



}
