import Scoreboard from '../Scoreboard.jsx';
import React from 'react';
import { mount } from 'enzyme';

test('Scoreboard component begins with 0 for player and AI', () => {
    const wrapper = mount(
        <Scoreboard />
    );

    const pScore = wrapper.find('.player-score');
    const AIScore = wrapper.find('.ai-score');
    expect(pScore.text()).toBe('0');
    expect(AIScore.text()).toBe('0');
});