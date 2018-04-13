import React from 'react';

export default class Square extends React.Component {    
    render() {
        return (
            <li className="square-li">
                in a square {this.props.num}
            </li>
        );
    }
}