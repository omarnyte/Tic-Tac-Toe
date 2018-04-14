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
            currentPlayer: 'human',
            over: false 
        }
        this.handleClick = this.handleClick.bind(this);
        this.makeMove = this.makeMove.bind(this);
        this.nextPlayer = this.nextPlayer.bind(this);
    }

    // lifecycle methods // 
    componentDidMount() {
        if (this.state.currentPlayer === 'AI') this.makeMove();
    }
    
    componentDidUpdate() {
        const { currentPlayer, over } = this.state; 
        if (currentPlayer === 'AI' && !over) this.makeMove();
    }
    
    // handlers // 
    handleClick(e) {    
        console.log('handling');
        
        const squareIdx = e.target.dataset.idx;
        let board = this.state.board.slice();
        let { currentPlayer, over } = this.state;
        
        // do nothing if square is already marked or if game is over
        if (board[squareIdx] || over) return;

        board[squareIdx] = 'X';
        currentPlayer = this.nextPlayer();
        
        this.setState({ board, currentPlayer});
        // if (isWinningMove(board)) {
        //     this.props.onWin(this.state.currentPlayer);
        //     return;
        // } else {
        //     const currentPlayer = this.nextPlayer();
        //     this.setState({ board, currentPlayer });
        // }
    }

    // helper methods // 
    makeMove() {
        let board  = this.state.board.slice();
        
        let currentPlayer = this.state.currentPlayer; 
        
        // pick random, empty square
        while (true) {
            const rand = Math.floor(Math.random() * 9);
            if (board[rand] !== null) {
                board[rand] = 'O';
                break;
            }
        }

        currentPlayer = this.nextPlayer();
        
        if (isWinningMove(board)) {
            this.props.onWin(this.state.currentPlayer);
        } else {
            this.nextPlayer();
        }

        this.setState({ board, currentPlayer })
    }

    nextPlayer() {
        console.log('next player');
        
        const player = (this.state.currentPlayer === 'AI' ? 'human' : 'AI');
        return player;
    }

    
    render() {
        const { board } = this.state;

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
    const numMarks = board.filter(square => square !== null).length;
    if (numMarks < 6) return false;    

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