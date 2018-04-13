const AILogic = require('../AILogic');

describe('AI Logic', () => {

    // test('AI picks a corner on first move', () => {

    // });
    
    // test('AI does not pick a middle square', () => {
    // });

    const cBefore = [
        null, null, 'X',
        null, 'X', null,
        'O', 'O', null
    ];
    const cAfter = [
        null, null, 'X',
        null, 'X', null,
        'O', 'O', 'O'
    ];
    test('AI picks winning move (if possible)', () => {
        expect(AILogic.move(cBefore).toBe(cAfter))
    });sy

    const dBefore = [
        null, null, 'O',
        null, 'O', null,
        'X', 'X', null
    ];
    const dAfter = [
        null, null, 'O',
        null, 'O', null,
        'X', 'X', 'X'
    ];
    test('AI blocks opponent\'s winning move (if possible)', () => {
        expect(AILogic.move(dBefore).toBe(dAfter))
    });

    const eBefore = [
        'X', null, 'O',
        'X', null, null,
        'O', null, null
    ];
    const eAfter = [
        'X', null, 'O',
        'X', null, null,
        'O', null, 'O'
    ];
    test('AI creates a fork (if possible)', () => {
        expect(AILogic.move(dBefore).toBe(dAfter))
    });

    // AI must not pick a corner 
    // const fBefore = [
    //     'X', null, null,
    //     null, 'O', null,
    //     null, null, 'X'
    // ];
    // const fAfter = [
    // ];
    // test('AI blocks a fork (if possible)', () => {
    //     expect(AILogic.move(dBefore).toBe(dAfter))
    // });



});