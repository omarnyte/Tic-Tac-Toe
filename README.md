[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

# Tic Tac Toe #

## Technologies ## 
* CSS3 
* HTML5
* JavaScript
* React

## Artificial Intelligence ## 
This version of Tic Tac Toe employs the [minimax algorithm](https://en.wikipedia.org/wiki/Minimax) to ensure that the user can never win. The algorithm recursively "sees ahead" by simulating the end result of every available move. Every end result is given a score (-100 for a human win; 100 for AI win; and 0 for a tie). It assumes that its opponent (i.e. the human player) will seek to maximize their own score. By rating every leaf node of the recursive tree, it can determine the best possible move to make. 

```JavaScript
function minimax(board, playerMark) {
    // determine all null indices of board array 
    let availableIndices = emptySquareIndices(board);

    // recursive base cases  
    if (isWinningMove(board, humanMark)) {
        // human wins game
        return { score: -100 };
    } else if (isWinningMove(board, AIMark)) {
        // AI wins game 
        return { score: 100 };
    } else if (availableIndices.length === 0) {
        // AI and human tie 
        return { score: 0 };
    }

    // create an array of all possible move objects, each of which contains an 
    // index and a score
    const moves = createMovesArr(board, availableIndices, playerMark);    

    // select the index of the best move (from the moves array) by score based on the current player 
    const bestIdx = bestIdxFromMoves(moves, playerMark);

    // return the best move object
    return moves[bestIdx];
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
``` 

## React Component Hierarchy ## 
* \<App /> 
    * \<ScoreBoard /> 
    * \<Board /> 
        * \<Square />  

