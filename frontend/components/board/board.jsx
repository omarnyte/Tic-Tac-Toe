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
            ]
        }
    }

    render() {

        return (
            <ul className="board-ul">
                {
                    this.state.board.map((square, idx) => {
                        return <Square key={idx }row={Math.floor(idx / 3)} col={idx % 3}/>
                    })
                }
            </ul>
        )
    }

} 

{/* <ul className="board-ul">
    {
        this.state.board.forEach((row, rowIdx) => {
            // row.map((col, colIdx) => {  
            return <Square key={rowIdx + colIdx} row={rowIdx} col={colIdx} />
        })
    })
}
            </ul> */}
