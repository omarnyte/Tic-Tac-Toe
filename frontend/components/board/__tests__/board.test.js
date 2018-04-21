import React from 'react';
import { mount, render, shallow } from 'enzyme';

import Board from '../board.jsx';

describe('Board component', () => {
    describe('Board renders correctly', () =>{
        test('initial Board is mounted without any marks', () => {
            const wrapper = shallow(
                <Board gameOver={false} removeGameOver={jest.fn()} tieGame={jest.fn()} updateScore={jest.fn()} />
            );
            const emptyBoard = [
                null, null, null, null, null, null, null, null, null
            ];
            expect(wrapper.state().board).toMatchObject(emptyBoard);
        });
    });

    describe('handlers', () => {
        describe('handleSquareClick(e)', () => {
            test('marks an empty square', ()=> {
                const wrapper = shallow(
                    <Board gameOver={false} removeGameOver={jest.fn()} tieGame={jest.fn()} updateScore={jest.fn()} />
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

            test('does not mark a square that is already marked', ()=> {
                const wrapper = shallow(
                    <Board gameOver={false} removeGameOver={jest.fn()} tieGame={jest.fn()} updateScore={jest.fn()} />
                );
                const event = {
                    target: {
                        dataset: {
                            idx: "0"
                        }
                    }
                }
                const board = [
                    'X', 'O', null, null, null, null, null, null, null
                ]
                const instance = wrapper.instance();
                wrapper.setState({ board });
                
                instance.handleSquareClick(event);
                expect(wrapper.state().board).toMatchObject(board);
            });

            

            test('updates score after win', ()=> {
                const tieGame = jest.fn();
                const updateScore = jest.fn();
                const wrapper = shallow(
                    <Board gameOver={ false } removeGameOver ={ jest.fn() } tieGame={ tieGame } updateScore={ updateScore } />
                );
                const event = {
                    target: {
                        dataset: {
                            idx: '5'
                        }
                    }
                }
                const board = [
                    'O', 'X', 'X', 
                    'O', 'O', null, 
                    null, null, 'X'
                ]
                const instance = wrapper.instance();
                wrapper.setState({ board });
                
                instance.handleSquareClick(event);
                expect(updateScore).toBeCalledWith('human');
            });

            test('does not update scores after tying', () => {
                const tieGame = jest.fn();
                const updateScore = jest.fn();
                const wrapper = mount(
                    <Board gameOver={false} removeGameOver={jest.fn()} tieGame={tieGame} updateScore={updateScore} />                );
                const event = {
                    target: {
                        dataset: {
                            idx: "8"
                        }
                    }
                }
                const board = [
                    'O', 'X', 'X', 
                    'X', 'X', 'O', 
                    'O', 'O', null
                ]
                const instance = wrapper.instance();
                wrapper.setState({ board });
                
                instance.handleSquareClick(event);
                expect(tieGame).toBeCalled();
            });
        });

        test("handleNewGameClick() resets the 'board' and 'currentPlayer' properties of the state", ()=> {
            const removeGameOver = jest.fn();
            const updateScore = jest.fn();
            const wrapper = shallow(
                <Board gameOver={false} removeGameOver={removeGameOver} tieGame={jest.fn()} updateScore={updateScore} />
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

    describe('helper methods', () => {
        test('currentPlayer changes to human after AI makes move', () => {
            const wrapper = shallow(
                <Board gameOver={false} removeGameOver={jest.fn()} tieGame={jest.fn()} updateScore={jest.fn()} />
            );
            const board = [
                'X', null, null, null, null, null, null, null, null
            ]
            const instance = wrapper.instance();
            wrapper.setState({ 
                board,
                currentPlayer: 'AI' 
            });

            expect(wrapper.state().currentPlayer).toBe('human'); 
        });

        test('updates score after an AI win', () => {
            const tieGame = jest.fn();
            const updateScore = jest.fn();
            const wrapper = shallow(
                <Board gameOver={false} removeGameOver={jest.fn()} tieGame={tieGame} updateScore={updateScore} />
            );

            const board = [
                'X', 'O', 'O',
                'X', 'O', 'X',
                null, null, 'X'
            ]
            const instance = wrapper.instance();
            wrapper.setState({ 
                board,
                currentPlayer: 'AI' 
            });

            instance.makeMove();
            expect(updateScore).toBeCalledWith('AI');
        });

        test('updates score after a human win', () => {
            const tieGame = jest.fn();
            const updateScore = jest.fn();
            const wrapper = shallow(
                <Board gameOver={false} removeGameOver={jest.fn()} tieGame={tieGame} updateScore={updateScore} />
            );
            const event = {
                target: {
                    dataset: {
                        idx: "0"
                    }
                }
            }
            const board = [
                null, 'O',  'O',
                null, 'X',  null,
                null, null, 'X'
            ];

            const instance = wrapper.instance();
            wrapper.setState({ 
                board,
                currentPlayer: 'human' 
            });

            instance.handleSquareClick(event);
            expect(updateScore).toBeCalledWith('human');
        });

        test('does not update scores after tying', () => {
            const tieGame = jest.fn();
            const updateScore = jest.fn();
            const wrapper = mount(
                <Board gameOver={false} removeGameOver={jest.fn()} tieGame={tieGame} updateScore={updateScore} />);

            const board = [
                'O', 'O', 'X',
                'X', 'X', 'O',
                'O', 'X', null
            ]
            const instance = wrapper.instance();
            wrapper.setState({ board });

            instance.makeMove();
            expect(tieGame).toBeCalled();
        });
    });
});

