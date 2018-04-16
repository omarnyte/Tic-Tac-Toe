import React from 'react';

import { 
    bestMoveIndex, 
    isWinningMove } from '../../../assets/javascripts/AILogic';
import Square from '../square/square.jsx';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [
                null, null, null,
                null, null, null,
                null, null, null
            ],
            currentPlayer: 'human',
            gameOver: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.makeMove = this.makeMove.bind(this);
    }

    // lifecycle methods 
    componentDidMount(){        
        if (this.state.currentPlayer === 'AI') this.makeMove();
    }

    componentDidUpdate(){
        const { currentPlayer, gameOver } = this.state;
        if (currentPlayer === 'AI' && !gameOver) this.makeMove();
    }

    // handlers 
    handleClick(e) {
        let board = this.state.board.slice();
        let { currentPlayer, gameOver } = this.state;
        const squareIdx = e.target.dataset.idx;
        // do nothing if sqaure is already marked or if game is over
        if (board[squareIdx] !== null || gameOver) return;
        board[squareIdx] = 'X';

        if (isWinningMove(board, 'X')) {
            gameOver = true;
        } else {
            currentPlayer = 'AI';
        }
        this.setState({ board, currentPlayer, gameOver });
    }

    // helper methods 
    makeMove() {                
        let board = this.state.board.slice();
        let { currentPlayer, gameOver } = this.state;
        
        const idx = bestMoveIndex(board);
        board[idx] = 'O';

        if (isWinningMove(board, 'O')) {
            gameOver = true;
        } else {
            currentPlayer = 'human';
        }
        this.setState({ board, currentPlayer, gameOver });
    }
    
    render() {
        const { board, currentPlayer, gameOver } = this.state;
        return (
            <ul 
                className="board-ul"
            >
                {
                    board.map((square, idx) => {
                        return <Square 
                            key={ idx } 
                            idx={ idx } 
                            mark={ board[idx] }
                            onClick = { this.handleClick }
                        />
                    })
                }
            </ul>
        )
    }

} 

