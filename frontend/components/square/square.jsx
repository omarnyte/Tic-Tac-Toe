import React from 'react';

export default class Square extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const mark = 'X';
        this.setState({ mark });
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
                onClick={ this.props.handleClick }
            >
                { this.props.mark }
            </li>
        );
    }
}