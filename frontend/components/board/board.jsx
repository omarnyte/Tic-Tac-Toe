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
        this.switchPlayer = this.switchPlayer.bind(this);
    }

    handleClick(e) {
        console.log(`target! ${e.target.text}`);
    }
    
    switchPlayer() {
        const currentPlayer = (this.state.currentPlayer === 'human' ? 'ai' : 'human');
        this.state = { currentPlayer };
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