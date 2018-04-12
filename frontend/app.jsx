import React from 'react';
import ReactDOM from 'react-dom';

import Scoreboard from './Scoreboard.jsx';


class Root extends React.Component {
    render() {
        return (
        <div>
            <Scoreboard />
        </div>
        )
        
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));