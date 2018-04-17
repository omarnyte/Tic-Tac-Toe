import React from 'react';
import { mount, render, shallow } from 'enzyme';

import Board from '../board.jsx';

describe('Board component', () => {
    // describe('tracking scores', () => {
    //     const scoreboardWrapper = mount(
    //         <Scoreboard />
    //     );

    //     const aiScore = scoreboardWrapper.find('.AI-score');
    //     console.log(('aiScore', aiScore));
    //     const playerScore = scoreboardWrapper.find('.player-score');
    //     console.log(('playerScore', playerScore));


    //     test('AI begins with a score of 0', () => {
    //         expect(playerScore.text()).toBe('0');
    //     });

    //     test('player begins with a score of 0', () => {
    //         expect(aiScore.text()).toBe('0');
    //     });
    // });
    
    test('initial Board is mounted without any marks', () => {
        const boardWrapper = mount(
            <Board gameOver="false" />
        );
        const emptyBoard = [
            null, null, null, null, null, null, null, null, null
        ];
        console.log(emptyBoard.state)
    });
});

