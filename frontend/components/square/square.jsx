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
        const {col, row} = this.props;

        return (
            <li 
                className="square-li"
                data-col={col}
                data-row={row}
            >
                <span>0</span>
            </li>
        );
    }
}