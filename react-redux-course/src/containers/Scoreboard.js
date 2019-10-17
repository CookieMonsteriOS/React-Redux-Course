import React, {Component,PropTypes} from 'react';
import {bindActionCreators} from 'redux';
//Import Player Creators from player
import * as PlayerActionCreators from '../actions/player';
import AddPlayerForm from '../components/AddPlayerForm'
import Header from '../components/Header'
import Player from '../components/Player'
import {connect} from 'react-redux';

class Scoreboard extends Component {

    static propTypes ={
        //Pass in array of data
        players: PropTypes.array.isRequired

    }

  render () {

        //Basically binding the actions to the context in which they are declared in this component
        // Allows them to be dispatched to the component.
        // Sets dispatch and players
        const {dispatch,players} = this.props
        const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer,dispatch);
        const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer,dispatch);
        const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore,dispatch);

        //Create player component+ Pass added the bound action creators
        const playerComponents = players.map((player,map) => {
            <Player index={index} name={player.name} score={player.score} key={player.name} updatePlayerScore={updatePlayerScore} removePlayer={removePlayer}/>
        });

        return (
         <div className="scoreboard">
        <Header players={players} />
        <div className="players">
            {playerComponents}
        </div>
        <AddPlayerForm onAdd={addPlayer} />
      </div>
    );
  }
};


//Connect helps us to susbcribe to specific parts of the react -redux
//states to props translator will change stat data into props
//Take player state data and assign it to player prop value called state
const mapStateToProps = state => (
    {
        players:state
    }
)

//Connect takes map state to props function
//2nd brackets contains the contains container which we want to connect to Redux
//Subscribse  scoreboard to any redux changes in the scoreboard container.
//Any time a change occurs in player state changes it will map it to the prop players and is injected into the scoreboard
//container and will be avaiable down stream components
export default connect (mapStateToProps)(Scoreboard);
