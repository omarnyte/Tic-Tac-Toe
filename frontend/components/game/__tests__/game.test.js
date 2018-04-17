import React from 'react';
import { mount, render, shallow } from 'enzyme';
import Game from '../game.jsx';

describe('Game component', () => {
    test("renders 'Game Over' text only when game is over", () => {
        const wrapper = shallow(
            <Game />
        ); 
        expect(wrapper.find('.game-over-span').length).toBe(0);

        wrapper.setState({ gameOver: true });
        expect(wrapper.find('.game-over-span').length).toBe(1);
    });

    describe('helper methods', () => {
        test("handleScoreUpdate(winner) updates the winner's score", () => {
            const wrapper = shallow(
                <Game />
            ); 
            const instance = wrapper.instance();

            expect(wrapper.state().AIScore).toBe(0);
            expect(wrapper.state().humanScore).toBe(0);

            instance.handleScoreUpdate('AI');
            expect(wrapper.state().AIScore).toBe(1);
            expect(wrapper.state().humanScore).toBe(0);
            
            instance.handleScoreUpdate('human');
            expect(wrapper.state().AIScore).toBe(1);
            expect(wrapper.state().humanScore).toBe(1);
        });
    });

    test('handleTie() does not update any score', () => {
        const wrapper = shallow(
            <Game />
        ); 
        wrapper.setState({ AIScore: 5, humanScore: 5 })
        const instance = wrapper.instance();

        instance.handleTie();
        expect(wrapper.state().AIScore).toBe(5);
        expect(wrapper.state().humanScore).toBe(5);
        expect(wrapper.state().gameOver).toBe(true);
    });

    test("removeGameOver() stops the 'Game Over' span from rendering", () => {
        const wrapper = shallow(
            <Game />
        ); 
        wrapper.setState({ gameOver: true });
        const instance = wrapper.instance();

        expect(wrapper.find('.game-over-span').length).toBe(1);
        instance.removeGameOver();
        expect(wrapper.find('.game-over-span').length).toBe(0);
    });
});

