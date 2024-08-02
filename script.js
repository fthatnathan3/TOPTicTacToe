const gameBoard = (function(){
    let colBoard1 = ['X','O', 'X'];
    let colBoard2 = ['X','X', 'X'];
    let colBoard3 = ['O','O', 'X'];

    const board = [colBoard1, colBoard2, colBoard3];
    // peek certain board
    const peekBoard = function(col,row){
        return `${board[col][row]}`
    }
    // show all board
    const showBoard = function(){
        return `${board[0]}\n${board[1]}\n${board[2]}`
    }

    const addToBoard = function(col, row, input ){
        board[col][row] = input.toUpperCase();
    }

    return {showBoard, addToBoard, peekBoard}
})();

const gameMaster = (function(){
    let isWin = false;
    const initiateGame = function (){
        isWin = false;
    }

    //keep the game playing
    //checking the answer
    //asking the player input
    //switching between player?

    //declareWinner

})();

function Player(name, pick){
    this.name = name;
    this.pick = `${pick}`;
    this.status = `player`;
}

gameBoard.addToBoard(1,2,'3');
console.log(gameBoard.peekBoard(1,1));