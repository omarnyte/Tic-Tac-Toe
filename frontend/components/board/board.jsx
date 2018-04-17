import React from 'react';

import { 
    bestMoveIndex, 
    emptySquareIndices,
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
            currentPlayer: 'human'
        }
        this.handleSquareClick = this.handleSquareClick.bind(this);
        this.handleNewGameClick = this.handleNewGameClick.bind(this);
        this.makeMove = this.makeMove.bind(this);
    }

    // lifecycle methods 
    componentDidMount(){        
        if (this.state.currentPlayer === 'AI') this.makeMove();
    }

    componentDidUpdate(){
        const { gameOver } = this.props;
        const { currentPlayer } = this.state;
        if (currentPlayer === 'AI' && !gameOver) {
            this.makeMove();
        }
    }

    // handlers 
    handleSquareClick(e) {
        console.dir(e.target.dataset)
        let board = this.state.board.slice();
        let { currentPlayer } = this.state;
        const { gameOver } = this.props;
        const squareIdx = e.target.dataset.idx;
        // do nothing if square is already marked or if game is over
        if (board[squareIdx] !== null || gameOver) return;
        board[squareIdx] = 'X';

        if (isWinningMove(board, 'X')) {
            this.props.updateScore('human');
        } else if (emptySquareIndices(board).length === 0) {
            // if game is tied
            this.props.tieGame(board);
        } else {
            currentPlayer = 'AI';
        }
        this.setState({ board, currentPlayer });
    }

    handleNewGameClick() {
        this.setState({
            board: [
                null, null, null,
                null, null, null,
                null, null, null
            ],
            currentPlayer: 'human'
        });
        this.props.removeGameOver();

    }

    // helper methods 
    makeMove() {                
        let board = this.state.board.slice();
        let { currentPlayer } = this.state;
        
        const idx = bestMoveIndex(board);
        board[idx] = 'O';

        if (isWinningMove(board, 'O')) {
            this.props.updateScore('AI');
        } else if(emptySquareIndices(board).length === 0) {
            // if game is tied
            this.props.tieGame(board);
        } else {
            currentPlayer = 'human';
        }
        this.setState({ board, currentPlayer });
    }
    
    render() {
        const { board, currentPlayer } = this.state;
        return (
            <div className='board-component-div'>
                <ul className="board-ul">
                    {
                        board.map((square, idx) => {
                            return <Square 
                                key={ idx } 
                                idx={ idx } 
                                mark={ board[idx] }
                                onClick = { this.handleSquareClick }
                            />
                        })
                    }
                </ul>
                <button
                    className='new-game-button'
                    onClick={ this.handleNewGameClick }
                >
                    New Game
                </button>
            </div>
        );
    }

} 

