import { log } from "util";

const humanMark = 'X';
const AIMark = 'O';

export const bestMoveIndex = (board) => {
    // if AI plays first, pick a random corner 
    if (board.filter(square => square === null).length === 9) {
        const cornerIndexes = [0, 2, 5, 8];
        return cornerIndexes[Math.floor(Math.random() * 4)];
    }
    return minimax(board, AIMark).index;
}

function emptySquareIndeces(board) {
    const indeces = [];
    board.forEach((square, idx) => {
        if (!square) indeces.push(idx);
    })
    return indeces;
}

export const isWinningMove = (board, player) => {
    // const numMarks = board.filter(square => square !== null).length;
    // if (numMarks < 6) return false;

    const winningIndeces = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winningIndeces.length; i++) {
        const [first, second, third] = winningIndeces[i];
        if (board[first] === player && board[second] === player && board[third] === player) {
            return true;
        }
    }

    return false;
}

function minimax(board, playerMark) {
    let availableIndeces = emptySquareIndeces(board);

    // base cases  
    if (isWinningMove(board, humanMark)) {
        // human wins game
        return { score: -100 }
    } else if (isWinningMove(board, AIMark)) {
        // AI wins game 
        return { score: 100 }
    } else if (availableIndeces.length === 0) {
        // AI and human tie 
        return { score: 0 }
    }

    // TODO move to helper method 
    let moves = [];
    for (let i = 0; i < availableIndeces.length; i++) {
        let move = {};
        move.index = availableIndeces[i];
        // simulate move by current player 
        board[availableIndeces[i]] = playerMark;

        // pass simulated board down to next depth with opposing player as current player  
        let result;
        const oppPlayerMark = (playerMark === AIMark ? humanMark : AIMark);
        result = minimax(board, oppPlayerMark);
        move.score = result.score;

        // simualted spot is retuned to null before next simulated move
        board[availableIndeces[i]] = null;
        moves.push(move);
    }

    // TODO move to helper method
    let bestMove;
    let bestScore;
    if (playerMark === AIMark) {
        // AI player aims to maximize score 
        bestScore = -100000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        // human player aims to minimize score 
        bestScore = 100000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
}

