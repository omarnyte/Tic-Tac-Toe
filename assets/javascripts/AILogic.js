// Win: If the player has two in a row, they can place a third to get three in a row.
function win(board) {

}
//     Block: If the opponent has two in a row, the player must play the third themselves to block the opponent.
function block(board){
    
}
//         Fork: Create an opportunity where the player has two threats to win(two non - blocked lines of 2).
// Blocking an opponent's fork: If there is only one possible fork for the opponent, the player should block it. Otherwise, the player should block any forks in any way that simultaneously allows them to create two in a row. Otherwise, the player should create a two in a row to force the opponent into defending, as long as it doesn't result in them creating a fork.For example, if "X" has two opposite corners and "O" has the center, "O" must not play a corner in order to win. (Playing a corner in this scenario creates a fork for "X" to win.)
//     Center: A player marks the center. (If it is the first move of the game, playing on a corner gives the second player more opportunities to make a mistake and may therefore be the better choice; however, it makes no difference between perfect players.)
// Opposite corner: If the opponent is in the corner, the player plays the opposite corner.
// Empty corner: The player plays in a corner square.
// Empty side: The player plays in a middle square on any of the 4 sides.



module.exports = {
    move(board) {

    },


};