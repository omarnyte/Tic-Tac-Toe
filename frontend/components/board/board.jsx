import React from 'react';

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
        this.handleClick = this.handleClick.bind(this);
        this.makeMove = this.makeMove.bind(this);
    }

    handleClick(e) {    
        const squareIdx = e.target.dataset.idx;
        const board = this.state.board;
        
        if (board[squareIdx]) return;

        board[squareIdx] = 'X';
        const currentPlayer = (this.state.currentPlayer === 'human' ? 'AI' : 'human');
        if (isWinningMove(board)) {
            this.props.onWin(this.state.currentPlayer);
            return;
        } else {
            this.switchPlayer();
            this.setState({ board, currentPlayer });
        }
    }

    makeMove() {
        const board = this.state.board;

        if (board.filter(square => square !== null).length >= 9) return;
        
        while (true) {
            const rand = Math.floor(Math.random() * 9);
            if (!board[rand]) {
                board[rand] = 'O';
                break;
            }
        }
        
        if (isWinningMove(board)) {
            this.props.onWin(this.state.currentPlayer);
            return;
        } else {
            this.switchPlayer();
        }
    }

    switchPlayer() {
        const currentPlayer = (this.state.currentPlayer === 'human' ? 'AI' : 'human');
        this.setState({ currentPlayer })
    }


    render() {
        const { board, currentPlayer } = this.state;
        if (currentPlayer === 'AI') {
            this.makeMove();
        }
        
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

function isWinningMove(board) {
    // const numMarks = board.filter(square => square !== null).length;
    // if (numMarks < 6) return false;    

    const winningIndeces = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winningIndeces.length; i++) {
        const [first, second, third] = winningIndeces[i];
        if (board[first] && board[first] === board[second] && board[second] === board[third]) {
            return true;
        }
    }

    return false;
}