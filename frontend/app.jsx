import React from 'react';
import ReactDOM from 'react-dom';

import Scoreboard from './components/scoreboard/scoreboard.jsx';


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