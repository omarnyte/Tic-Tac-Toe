import React from 'react';

export default function Square(props) {    
        const { idx, mark } = props; 
        const col =  idx % 3;
        const row = Math.floor(idx / 3);

        const status = (mark === null ? '' : 'selected');

        return (
            <li 
                className='square-li'
                data-idx={ idx }
                data-col={ col }
                data-row={ row }
                onClick={ props.onClick }
            >
                <span className={`square-span ${status}`}>{ props.mark }</span>
                
            </li>
        );
}