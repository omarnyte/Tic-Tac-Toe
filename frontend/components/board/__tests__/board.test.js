import React from 'react';
import { mount } from 'enzyme';

import Board from '../board.jsx';

describe('Board component', () => {
    test('Board is mounted without any marks', () => {
        const boardWrapper = mount(
            <Board gameOver="false" />
        );
        const emptyBoard = [
            null, null, null, null, null, null, null, null, null
        ];
        console.log(emptyBoard.state)
    });
    

});

