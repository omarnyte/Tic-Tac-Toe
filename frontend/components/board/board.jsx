import React from 'react';

import Square from '../square/square.jsx';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.renderSquares = this.renderSquares.bind(this);
    }

    render() {
        let grid = new Array(9).fill(0);

        return (
            <ul className="board-ul">
                {
                    grid.map((zero, idx) => {
                        return <Square key={idx}/>
                    }) 
                }
            </ul>
        )
    }

} 

