import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board/board.jsx';
import Scoreboard from './components/scoreboard/scoreboard.jsx';

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            AIScore: 0,
            humanScore: 0
        }
        this.updateScore = this.updateScore.bind(this);
    }

    updateScore(winner) {
        let { AIScore, humanScore } = this.state;
        if (winner === 'human') {
            humanScore += 1;
        } else {
            AIScore += 1;
        }
        this.setState({ AIScore, humanScore })
    }

    render() {
        const { AIScore, humanScore } = this.state;
        
        return (
        <div className="root-div">
            <Board updateScore={ this.updateScore } />
            <Scoreboard AIScore={AIScore} humanScore={humanScore} />
        </div>
        )
        
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));