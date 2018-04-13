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
                        return <Square key={idx} idx={idx} />
                    })
                }
            </ul>
        )
    }

} 