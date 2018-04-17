import React from 'react';
import { mount, render, shallow } from 'enzyme';

import Board from '../board.jsx';

describe('Board component', () => {
    test('initial Board is mounted without any marks', () => {
        const wrapper = shallow(
            <Board gameOver="false" />
        );
        const emptyBoard = [
            null, null, null, null, null, null, null, null, null
        ];
        expect(wrapper.state().board).toMatchObject(emptyBoard);
    });

    describe('handlers', () => {
        describe('handleSquareClick(e)', () => {
            test('marks an empty square', ()=> {
                const wrapper = mount(
                    <Board />
                );
                const event = {
                    target: {
                        dataset: {
                            idx: "0"
                        }
                    }
                }
                const board = [
                    'X', null, null, null, null, null, null, null, null
                ]
                const instance = wrapper.instance();
                
                instance.handleSquareClick(event);
                expect(wrapper.state().board[event.target.dataset.idx]).toBe('X');
            });

            // test('changes the currentPlayer to AI after clicking', ()=> {
            //     const updateScore = jest.fn();
            //     const wrapper = mount(
            //         <Board updateScore={ updateScore } />
            //     );
            //     const event = {
            //         target: {
            //             dataset: {
            //                 idx: "0"
            //             }
            //         }
            //     }
            //     const board = [
            //         null, 'X', 'X', 'O', 'O', null, null, null, null
            //     ]
            //     const instance = wrapper.instance();
                
            //     instance.handleSquareClick(event);
            //     expect(updateScore).toHaveBeenCalled();
            // });

            // test('does not update scores after tying', () => {
            //     const updateScore = jest.fn();
            //     const wrapper = mount(
            //         <Board updateScore={ updateScore } />
            //     );
            //     const event = {
            //         target: {
            //             dataset: {
            //                 idx: "0"
            //             }
            //         }
            //     }
            //     const board = [
            //         null, 'X', 'X', 'O', 'O', null, null, null, null
            //     ]
            //     const instance = wrapper.instance();
                
            //     instance.handleSquareClick(event);
            //     expect(updateScore).toHaveBeenCalled();
            // });
        });

        test("handleNewGameClick() resets the 'board' and 'currentPlayer properties of the state", ()=> {
            const removeGameOver = jest.fn();
            const updateScore = jest.fn();
            const wrapper = shallow(
                <Board 
                    removeGameOver={ removeGameOver } 
                    updateScore = { updateScore} 
                />
            );
            const instance = wrapper.instance();
            const emptyBoard = [
                null, null, null, null, null, null, null, null, null
            ];
            const fullBoard = [
                'X', 'X', 'O', 'O', 'O', 'X', 'O', 'X', 'X'
            ];
            wrapper.setState({ board: fullBoard, currentPlayer: 'AI' });

            instance.handleNewGameClick();
            expect(wrapper.state().board).toMatchObject(emptyBoard);
            expect(wrapper.state().currentPlayer).toBe('human');
        });
    });

    // describe('helper methods', () => {
    //     test('make move() on a tied board does not update scores', () => {
    //         const tieGame = jest.fn();
    //         const wrapper = shallow(
    //             <Board tieGame={ tieGame } />
    //         );
    //         const instance = wrapper.instance();
    //         const tiedBoard = [
    //             'X', 'O', 'X',
    //             'O', 'X', 'O',
    //             'O', 'X', 'O' 
    //         ];

    //         instance.makeMove(tiedBoard);
    //         expect(tieGame).toBeCalled();
    //     });
    // });
});

