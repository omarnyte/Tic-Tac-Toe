import React from 'react';
import { mount } from 'enzyme';

import Scoreboard from '../Scoreboard.jsx';

describe('Scoreboard component', () => {
    describe('tracking scores', () => {
        const scoreboardWrapper = mount(
            <Scoreboard />
        );

        const aiScore = scoreboardWrapper.find('.AI-score');
        const playerScore = scoreboardWrapper.find('.player-score');

        test('AI begins with a score of 0', () => {
            expect(playerScore.text()).toBe('0');
        });

        test('player begins with a score of 0', () => {
            expect(aiScore.text()).toBe('0');
        });
    });
});