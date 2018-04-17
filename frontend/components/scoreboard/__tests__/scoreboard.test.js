import React from 'react';
import { mount, render, shallow } from 'enzyme';

import Scoreboard from '../Scoreboard.jsx';

describe('Scoreboard component', () => {
    describe('Scoreboard renders the scores passed down as props', () => {
        const scoreboardWrapper = shallow(
            <Scoreboard AIScore={ 5 } humanScore ={ 0 }/>
        );
        const aiScore = scoreboardWrapper.find('.AI-score');
        const playerScore = scoreboardWrapper.find('.player-score');

        test('AI begins with a score of 0', () => {
            expect(playerScore.text()).toBe('Player: 0');
        });

        test('player begins with a score of 0', () => {
            expect(aiScore.text()).toBe('Computer: 5');
        });
    });
});