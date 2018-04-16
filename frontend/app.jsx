import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board/board.jsx';
import Scoreboard from './components/scoreboard/scoreboard.jsx';

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            AIScore: 0,
            humanScore: 0,
            gameOver: false
        }
        this.handleScoreUpdate = this.handleScoreUpdate.bind(this);
        this.renderNewGameButton = this.renderNewGameButton.bind(this);
    }

    handleScoreUpdate(winner) {
        let { AIScore, humanScore, gameOver } = this.state;
        gameOver = true;
        if (winner === 'human') {
            humanScore += 1;
        } else {
            AIScore += 1;
        }
        this.setState({ AIScore, humanScore, gameOver })
    }

    renderNewGameButton() {
        return (
            <button className='new-game-button'>New Game</button>
        );
    }

    render() {
        const { AIScore, humanScore, gameOver } = this.state;
        
        return (
        <div className="app-div">
            <Board 
                gameOver={ gameOver }
                updateScore={this.handleScoreUpdate}  
            />
            <Scoreboard AIScore={ AIScore } humanScore={ humanScore } />
            { this.renderNewGameButton() }
        </div>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));