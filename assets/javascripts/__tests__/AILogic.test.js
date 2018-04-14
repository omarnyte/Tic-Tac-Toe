import * as AILogic from "../AILogic";

describe('AI Logic', () => {
    describe('helper methods', () => {
        const aBoard = [
            'X',  null, null,
            null, null, null,
            null, null, 'O'
        ];
        const aAnswer = [1, 2, 3, 4, 5, 6, 7];
        test('selects unmarked indeces', () => {
            expect(aBoard).toEqual(expect.arrayContaining(aAnswer));
        });
    });

    
    // test('AI picks a corner on first move', () => {

    // });
    
    // test('AI does not pick a middle square', () => {
    // });

    // const c = [
    //     null, null, 'X',
    //     null, 'X',  null,
    //     'O',  'O',  null
    // ];
    // test('AI picks winning move (if possible)', () => {
    //     expect(bestMoveIndex(c).toBe(8))
    // });

    // const d = [
    //     null, null, 'O',
    //     null, 'O',   null,
    //     'X',  'X',   null
    // ];
    // test('AI blocks opponent\'s winning move (if possible)', () => {
    //     expect(bestMoveIndex(d).toBe(8))
    // });

    // const eBefore = [
    //     'X', null, 'O',
    //     'X', null, null,
    //     'O', null, null
    // ];
    // const eAfter = [
    //     'X', null, 'O',
    //     'X', null, null,
    //     'O', null, 'O'
    // ];
    // test('AI creates a fork (if possible)', () => {
    //     expect(AILogic.move(dBefore).toBe(dAfter))
    // });

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