import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {PlayerReducer} from './src/reducers/player';
import Scoreboard from './src/containers/Scoreboard';

//Registers the Player reducer with the store in redux
const store = createScore(
    PlayerReducer,
    window.devToolsExtension && window.devToolsExtension()
)

render(
    //Wrapping our application it allows any components to subscribe to any data changes
    <Provider store = {store}>
     <Scoreboard />
    </Provider>,
        document.getElementById('root')
);