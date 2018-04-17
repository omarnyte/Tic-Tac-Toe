import { log } from "util";

const humanMark = 'X';
const AIMark = 'O';

export const bestMoveIndex = (board) => {
    if (board.filter(square => square === null).length === 9) {
        // if AI plays first, pick a random corner 
        const cornerIndices = [0, 2, 5, 8];
        return cornerIndices[Math.floor(Math.random() * 4)];
    } else { 
        // otherwise, determine best move (and index) through minimax algorithm 
        return minimax(board, AIMark).index;
    }
}

function minimax(board, playerMark) {
    // determine all non-null indices of board array 
    let availableIndices = emptySquareIndices(board);

    // recursive base cases  
    if (isWinningMove(board, humanMark)) {
        // human wins game
        return { score: -100 }
    } else if (isWinningMove(board, AIMark)) {
        // AI wins game 
        return { score: 100 }
    } else if (availableIndices.length === 0) {
        // AI and human tie 
        return { score: 0 }
    }

    // create an array of all possible move objects, each of which contains an 
    // index and a score
    const moves = createMovesArr(board, availableIndices, playerMark);    

    // select the index of the best move (from the moves array) by score based on the current player 
    const bestIdx = bestIdxFromMoves(moves, playerMark);

    // return the best move object
    return moves[bestIdx];
}

function emptySquareIndices(arr) {
    const result = [];
    arr.forEach((square, idx) => {
        if (!square) result.push(idx);
    })
    return result;
}

export const isWinningMove = (board, playerMark) => {
    // return false early if there aren't enough filled squares to end a game
    const numMarks = board.filter(square => square !== null).length;
    if (numMarks < 5) return false;

    const winningIndices = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winningIndices.length; i++) {
        const [first, second, third] = winningIndices[i];
        if (board[first] === playerMark && board[second] === playerMark && board[third] === playerMark) {
            return true;
        }
    }

    return false;
}

export const createMovesArr = (board, availableIndices, playerMark) => {
    let moves = [];
    
    for (let i = 0; i < availableIndices.length; i++) {
        let move = {};
        move.index = availableIndices[i];
        // simulate move by current player 
        board[availableIndices[i]] = playerMark;

        // pass simulated board down to next depth with opposing player as current player  
        let result;
        const oppPlayerMark = (playerMark === AIMark ? humanMark : AIMark);
        result = minimax(board, oppPlayerMark);
        move.score = result.score;

        // simualted spot is returned to null before next simulated move
        board[availableIndices[i]] = null;
        moves.push(move);
    }
    return moves;
}

export const bestIdxFromMoves = (movesArr, playerMark) => {
    let bestIdx;
    let bestScore;
    if (playerMark === AIMark) {
        // AI player aims to maximize score 
        bestScore = -100000;
        movesArr.forEach((move, idx) => {
            if (movesArr[idx].score > bestScore) {
                bestScore = movesArr[idx].score;
                bestIdx = idx;
            }
        })
    } else {
        // human player aims to minimize score
        bestScore = 100000;
        movesArr.forEach((move, idx) => {
            if (movesArr[idx].score < bestScore) {
                bestScore = movesArr[idx].score;
                bestIdx = idx;
            }
        }) 
    }
    return bestIdx;
}




