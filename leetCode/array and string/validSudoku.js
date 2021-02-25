/*

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

1. Each row must contain the digits 1-9 without repetition.
2. Each column must contain the digits 1-9 without repetition.
3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

*/

var isValidSudoku = function (board) {
    if (board.length !== 9) {
        return false
    }
    // 9 rows
    // 9 columns
    // 9 grids
    // 27 total variables to check


    let windowRow1 = board[0].sort()
    let windowColumn1 = [board[0][0], board[1][0], ...]
    let subBoard = [board[0][0], board[0][1], board[0][2], board[1][0], board[1][1], board[1][2], board[2][0], board[2][1], board[2][2]]

    function checkSubBoard(subBoard) {
    let sortedSubBoard = subBoard.sort()
    for (let i = 0; i < sortedSubBoard; i++) {
        if (sortedSubBoard[i] == sortedSubBoard[i + 1]) {
            return false; 
        }
    }
}    
    
}





// let sudokuMap = {
    //     '1': 0,
    //     '2': 0,
    //     '3': 0,
    //     '4': 0,
    //     '5': 0,
    //     '6': 0,
    //     '7': 0,
    //     '8': 0,
    //     '9': 0,
    // }

    // // row check 9x, after each check reset sudoukMap
    // // column check 9x, after each check reset map
    // // grid check, after each check reset :
    // // grid example : 
    // grid1 = arr[0][0-2], arr[1][0-2], arr[1][2]
    // grid2 = arr[1][3-5], arr[1][3-5], arr[1][3-5]
    // grid3 = arr[2][6-8], arr[2][6-8], arr[2][6-8]