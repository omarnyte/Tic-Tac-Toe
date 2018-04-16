import * as AILogic from "../AILogic.js";

describe('AI Logic', () => {
    describe('bestMoveIndex()', () => {
        test('AI picks a corner on first move', () => {
            const cornerIndeces = [0, 2, 5, 8];
            const board = [
                null, null, null,
                null, null, null,
                null, null, null
            ];
            expect(cornerIndeces).toContain(AILogic.bestMoveIndex(board));
        });
        test('AI picks winning move (if possible)', () => {
            const board = [
                'O', 'O', null,
                'X', null, null,
                'X', null, 'X'
            ];
            expect(AILogic.bestMoveIndex(board)).toBe(2);
        });

        test('AI blocks opponent\'s winning move (if possible)', () => {
            const board = [
                null, 'X', 'O',
                null, 'O', null,
                'X', 'X', null
            ];
            expect(AILogic.bestMoveIndex(board)).toBe(8);
        });

        test('AI creates a fork (if possible)', () => {
            const board = [
                null, null, 'O',
                null, 'X', null,
                'X', null, 'O'
            ];
            expect(AILogic.bestMoveIndex(board)).toBe(0)
        });
    })
    
    describe('helper methods', () => {
        test('isWinningMove(board, playerMark)', () => {
            const winBoard = [
                'O', 'O', 'O',
                'X', null, null,
                'X', null, 'X'
            ]
            const noWinBoard = [
                'O', 'O', null,
                'X', null, null,
                'X', null, 'X'
            ]
            expect(AILogic.isWinningMove(winBoard, 'O')).toBe(true);
            expect(AILogic.isWinningMove(winBoard, 'X')).toBe(false);
            expect(AILogic.isWinningMove(noWinBoard, 'O')).toBe(false);
            expect(AILogic.isWinningMove(noWinBoard, 'X')).toBe(false);
        });

        test('createMovesArr(board, availableIndeces, playerMark)', () => {
            const board = [
                'O', null, 'X',
                'X', 'O', null,
                'X', 'O', 'X'
            ]
            const availableIndeces = [1, 5];
            const testObjects = AILogic.createMovesArr(board, availableIndeces, 'O');
            expect(testObjects[0].index).toBe(1);
            expect(testObjects[0].score).toBe(100);
            expect(testObjects[1].index).toBe(5);
            expect(testObjects[1].score).toBe(0);
        });

        test('bestIdxFromMoves(movesArr, playerMark)', () => {
            const moves = [
                { index: 1, score: -100 },
                { index: 3, score: -0 },
                { index: 5, score: 100 },
            ];
            expect(AILogic.bestIdxFromMoves(moves, 'O')).toBe(2);
        });
    });
});