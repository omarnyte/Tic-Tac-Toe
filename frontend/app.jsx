import React from 'react';
import ReactDOM from 'react-dom';

import Game from './components/game/game.jsx';

class Root extends React.Component {
    render() {        
            return <Game />; 
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));