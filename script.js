const gameBoard = (function(){
    let rowBoard1 = ['X','O', 'X'];
    let rowBoard2 = ['X','X', 'X'];
    let rowBoard3 = ['O','O', 'X'];
    const board = [rowBoard1, rowBoard2, rowBoard3];
    
    const diagonalPiece1 = [board[0][0], board[1][1], board[2][2]];
    const diagonalPiece2 = [board[0][1], board[1][1], board[2][0]];
    
    const getBoardPiece = function(row,col){
        return `${board[row][col]}`;
    }

    const getColPiece = function(col){
        return [board[0][col], board[1][col], board[2][col]];
    }
    const getRowPiece = function(row){
        return board[row];
    }
    // show all board
    const showBoard = function(){
        return `${board[0]}\n${board[1]}\n${board[2]}`;
    }

    const addToBoard = function(row, col, input ){
        board[col][row] = input.toUpperCase();
    }

    return {showBoard, addToBoard, getBoardPiece, getColPiece, getRowPiece, diagonalPiece1}
})();

const gameMaster = (function(){
    let isWin = false;
    const posForDiaCheck = ['00','03','11','21','23'];
    const initiateGame = function (){
        isWin = false;
    }
    
    const checkColumn = function(board, row, col){
        let boardPiece = board.getBoardPiece(row, col);
        const colPiece = board.getColPiece(col);
        colPiece.forEach((e)=>{
            if(boardPiece != e){
                isWin = false;
            }
            else {
                isWin = true;
            }
        })
        return isWin;
    }
   const checkRow = function(board, row, col){
        let boardPiece = board.getBoardPiece(row, col);
        const rowPiece = board.getRowPiece(row);

        rowPiece.forEach((e) =>{
            if(boardPiece ==e){
                isWin = true;
            }
        })

        return isWin;
    }
    const posCheck = function(row,col){
        let diaPos = false;
        let posPiece = `${row}${col}`;
        posForDiaCheck.forEach((e)=>{
            if(e == posPiece){
                diaPos = true
            }
        });
        return diaPos;
    }
    const checkDiagonal = function(board,row,col){
        let diaPos = posCheck(row,col);
        console.log(diaPos);
        let boardPiece = board.getBoardPiece(row, col);
        if(diaPos){
            board.diagonalPiece1.forEach((e)=>{
                if(e == boardPiece ){
                    isWin = true;
                }
            })
        }
        return isWin;
    }
        
    //keep the game playing
    //checking the answer
    //asking the player input
    //switching between player?

    //declareisWin
    return {checkColumn, checkRow, checkDiagonal, posForDiaCheck}

})();

function Player(name, pick){
    this.name = name;
    this.pick = `${pick}`;
    this.status = `player`;
}


console.log(gameMaster.checkDiagonal(gameBoard,1,1));