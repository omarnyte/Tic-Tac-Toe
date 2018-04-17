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
        this.handleNewGameButton = this.handleNewGameButton.bind(this);
        this.handleTie = this.handleTie.bind(this); 
        this.renderGameOver = this.renderGameOver.bind(this); 
    }

    // handlers 
    handleNewGameButton() {
        let gameOver = false;
        this.setState({ gameOver });
    }

    handleScoreUpdate(winner) {
        let { AIScore, humanScore, gameOver } = this.state;
        gameOver = true;
        if (winner === 'human') {
            humanScore += 1;
        } else {
            AIScore += 1;
        }
        this.setState({ AIScore, humanScore, gameOver });
    }

    handleTie() {
        this.setState({ gameOver: true });
    }

    // render functions 
    renderNewGameButton() {
        return (
            <button 
                className='new-game-button' 
                onClick={ this.handleButtonClick }
            >
                New Game
            </button>
        );
    }

    renderGameOver() {
        if (this.state.gameOver) {
            return <span className='game-over-span'>GAME OVER</span>
        }
    }

    render() {
        const { AIScore, humanScore, gameOver } = this.state;
        
        return (
        <div className="app-div">
            <Board 
                gameOver={ gameOver }
                tieGame={ this.handleTie }
                updateScore={ this.handleScoreUpdate }  
            />
            <Scoreboard 
                AIScore={ AIScore } 
                gameOver={ gameOver }
                humanScore={ humanScore } 
            />
            { this.renderNewGameButton() }
            { this.renderGameOver()  } 
        </div>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));