[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![Coverage Status](https://coveralls.io/repos/github/omarnyte/Tic-Tac-Toe/badge.svg?branch=master)](https://coveralls.io/github/omarnyte/Tic-Tac-Toe?branch=master)

# Tic Tac Toe #

## Technologies ## 
* CSS3 
* HTML5
* JavaScript
* React

## Gameplay ##
The game is simple. You, the human, chooses first. Your objective is to get 3 X's in a row, column, or diagonal. Simply click the empty square you wish to fill.

![tied game](https://github.com/omarnyte/Tic-Tac-Toe/blob/master/assets/images/tie.gif)

When you lose the game (sorry--the AI is unbeatable!), you can start a new game by clicking the *New Game* button on the bottom of the screen. 

![new game](https://github.com/omarnyte/Tic-Tac-Toe/blob/master/assets/images/new-game.gif)

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

## Design ##
The board is styled entirely with pure CSS. Breakpoints are used to ensure that the game renders appropriately on smaller screens. 

![break points animation](https://github.com/omarnyte/Tic-Tac-Toe/blob/master/assets/images/break-points.gif)


## React Component Hierarchy ## 
* \<App /> 
    * \<ScoreBoard /> 
    * \<Board /> 
        * \<Square />  

## Testing ##
* The AI logic is fully tested using the [Jest](https://facebook.github.io/jest/) testing framework. 
* Every React component is tested using [Enzyme](http://airbnb.io/enzyme/). 
* Together, these frameworks cover 96% of the application's JavaScript.


![test coverage breakdown](https://github.com/omarnyte/Tic-Tac-Toe/blob/master/assets/images/test-coverage.png)


## Future Features ## 
* Allow the user to toggle between playing against the computer and playing against another human player on the same computer. 
* Implement a backend to allow two players to play against each other using websockets.

## Contributing ## 
I'm glad to see that you'd like to help make Tic Tac Toe a better game! Please follow the steps below to contribute.

1. Fork the repo. 
2. Install dependencies while in the root directory. 
    ```JavaScript 
    npm install 
    ```
3. Run webpack in watch mode to ensure that your changes are reflected while previewing the app. You can preview a local version of the application by visiting ```<repo location>/Tic-Tac-Toe/index.html``` on your browser.
    ```JavaScript
    npm run dev 
    ```
3. Make your changes.
4. Write and run tests for any of your changes. This step ensures that your changes do not break the application. 
    ```JavaScript
    // to run all tests: 
    npm test 

    // to check coverage percentage:
    npm run test:coverage

    // to run tests while you code:
    npm run test:watch
    ```
    * Tests are written using [Jest](https://facebook.github.io/jest/) and [Enzyme](http://airbnb.io/enzyme/). For a great introduction to both, please read [How to Test React Components Using Jest](https://www.sitepoint.com/test-react-components-jest/). The documentation for Jest and Enzyme are also fantastic resources.
6. Make a pull request. 
    * If you've made a significant change to the functionality of the game, please make sure you have updated the README to reflect those changes. GIFs and/or pictures of the added functionality are encouraged! 