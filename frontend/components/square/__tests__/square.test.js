import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Square from '../square.jsx';


describe('Board component', () => {
    // test('squares passed null as a mark prop do not render a mark', () => {
    //     const squareWrapper = shallow(
    //         <Square key={ 0 } idx={ 0 } mark={ null } onClick={ onClick } />
    //     );
    //     expect(squareWrapper.prop('.square-span'),toEqual(''));
    // });

    test('call the onClick function when an empty square is clicked', () => {
        const onClick = jest.fn();
        const squareWrapper = shallow(
            <Square key={ 0 } idx={ 0 } mark={ null } onClick={ onClick } />
        );

        squareWrapper.find('.square-li').simulate('click');
        expect(onClick).toBeCalled(); 
    });
});

