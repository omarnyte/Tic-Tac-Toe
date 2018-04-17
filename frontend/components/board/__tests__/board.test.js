import React from 'react';
import { mount, render, shallow } from 'enzyme';

import Board from '../board.jsx';

describe('Board component', () => {
    test('initial Board is mounted without any marks', () => {
        const boardWrapper = shallow(
            <Board gameOver="false" />
        );
        const emptyBoard = [
            null, null, null, null, null, null, null, null, null
        ];
        expect(boardWrapper.state().board).toMatchObject(emptyBoard);
    });
});

