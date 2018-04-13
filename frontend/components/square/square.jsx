import React from 'react';

export default function Square(props) {    
        const { idx } = props; 
        const col =  idx % 3;
        const row = Math.floor(idx / 3);

        return (
            <li 
                className="square-li"
                data-idx={ idx }
                data-col={ col }
                data-row={ row }
                onClick={ props.onClick }
            >
                <span>{props.mark}</span>
                
            </li>
        );
}