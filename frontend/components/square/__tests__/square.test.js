import React from 'react';
import { shallow, render, shallow } from 'enzyme';
import Square from '../square.jsx';


describe('Square component', () => {
    describe('Square components render correctly', () => {
        test('squares passed null as a mark prop do not render a mark', () => {
            const squareWrapper = shallow(
                <Square key={ 0 } idx={ 0 } mark={ null } />
            );
            const span = squareWrapper.find('.square-span');
            expect(span.text()).toBe('');
        });
    
        test('squares passed a mark render that mark', () => {
            const xSquareWrapper = shallow(
                <Square key={ 0 } idx={ 0 } mark={ 'X' } />
            );
            const oSquareWrapper = shallow(
                <Square key={ 0 } idx={ 0 } mark={ 'O' } />
            );
            const xSpan = xSquareWrapper.find('.square-span');
            const oSpan = oSquareWrapper.find('.square-span');
            
            expect(xSpan.text()).toBe('X');
            expect(oSpan.text()).toBe('O');
        });
    });

    describe("Square li's are assigned the correct classes", () => {
        test("top row Square li's receive the 'top' class", () => {
            for (let i = 0; i <= 2; i++) {
                const squareWrapper = shallow(
                    <Square key={ i } idx={ i } mark={null} />
                );
                const li = squareWrapper.find('.square-li');
                expect(li.hasClass('top')).toBe(true);
            }
        });

        test("bottom row Square li's receive the 'bottom' class", () => {
            for (let i = 6; i <= 8; i++) {
                const squareWrapper = shallow(
                    <Square key={ i } idx={ i } mark={null} />
                );
                const li = squareWrapper.find('.square-li');
                expect(li.hasClass('bottom')).toBe(true);
            }
        });

        test("left column Square li's receive the 'left' class", () => {
            const leftIndices = [0, 3, 6];
            for (let i = 0; i < leftIndices.length; i++) {
                const squareWrapper = shallow(
                    <Square key={ leftIndices[i] } idx={ leftIndices[i] } mark={null} />
                );
                const li = squareWrapper.find('.square-li');
                expect(li.hasClass('left')).toBe(true);
            }
        });

        test("right column Square li's receive the 'right' class", () => {
            const rightIndices = [2, 5, 8];
            for (let i = 0; i < rightIndices.length; i++) {
                const squareWrapper = shallow(
                    <Square key={ rightIndices[i] } idx={ rightIndices[i] } mark={null} />
                );
                const li = squareWrapper.find('.square-li');
                expect(li.hasClass('right')).toBe(true);
            }
        });
    });

    describe('event handlers', () => {
        test('call the onClick function when a square is clicked', () => {
            const onClick = jest.fn();
            const squareWrapper = shallow(
                <Square key={ 0 } idx={ 0 } mark={ null } onClick={ onClick } />
            );
    
            squareWrapper.find('.square-li').simulate('click');
            expect(onClick).toBeCalled(); 
        });
    });
});

