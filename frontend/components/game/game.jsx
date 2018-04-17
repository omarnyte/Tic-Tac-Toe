import React from 'react';

import Board from '../board/board.jsx';
import Scoreboard from '../scoreboard/scoreboard.jsx';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            AIScore: 0,
            humanScore: 0,
            gameOver: false
        }
        this.handleScoreUpdate = this.handleScoreUpdate.bind(this);
        this.handleTie = this.handleTie.bind(this);
        this.removeGameOver = this.removeGameOver.bind(this);
        this.renderGameOver = this.renderGameOver.bind(this);
    }

    // handlers 
    
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
    
    removeGameOver() {
        this.setState({ gameOver: false });
    }

    // render functions 
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
                    removeGameOver={ this.removeGameOver }
                    tieGame={ this.handleTie }
                    updateScore={ this.handleScoreUpdate }
                />
                <Scoreboard
                    AIScore={AIScore}
                    humanScore={ humanScore }
                />
                {this.renderGameOver()}
            </div>
        );
    }
}