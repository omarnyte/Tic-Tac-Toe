import React from 'react';

export default function Square(props) {    
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