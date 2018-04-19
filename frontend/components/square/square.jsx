import React from 'react';
import PropTypes from 'prop-types';

function Square(props) {    
    const { idx, mark } = props; 
    const status = (mark === null ? '' : 'selected');
    const top = (idx >= 0 && idx <= 2 ? 'top' : '');
    const bottom = (idx >= 6 && idx <= 8 ? 'bottom' : '');
    const left = (idx % 3 === 0 ? 'left' : '');
    const right = (idx % 3 === 2 ? 'right' : '');


    return (
        <li 
            className={`square-li ${status} ${top} ${bottom} ${left} ${right}`}
            data-idx={ idx }
            onClick={ props.onClick }
        >
            <span className={`square-span ${status}`}>{ props.mark }</span>
            
        </li>
    );
}

Square.propTypes = {
    idx: PropTypes.number.isRequired,
    mark: PropTypes.oneOf(['X', 'O']),
    onClick: PropTypes.func.isRequired 
}

export default Square;