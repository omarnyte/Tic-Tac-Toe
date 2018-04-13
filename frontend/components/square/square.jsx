import React from 'react';

export default class Square extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            mark: ''
        }
    }
    
    render() {
        const { idx } = this.props; 
        const col =  idx % 3;
        const row = Math.floor(idx / 3);

        return (
            <li 
                className="square-li"
                data-idx={ idx }
                data-col={ col }
                data-row={ row }
            >
                <span>{this.state.mark}</span>
            </li>
        );
    }
}