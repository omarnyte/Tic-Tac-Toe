import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board/board.jsx';
import Scoreboard from './components/scoreboard/scoreboard.jsx';

class Root extends React.Component {
    render() {
        return (
        <div className="root-div">
            <Board />
            <Scoreboard />
        </div>
        )
        
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));