let gameBoard = [
    ["","",""],
    ["","",""],
    ["","",""]
]

let currentplayer = 'X';
let noOfPlays = 0;
let isGameOver = false;

function playerMove(cell){
    if(isGameOver){
        alert("game over restart game")
        return
    }
    
    let row = cell.parentNode.rowIndex;
    let col = cell.cellIndex;
    //console.log({row, col})
    //console.log(cell)

    if(gameBoard[row][col] === ""){
        gameBoard[row][col] = currentplayer;
        cell.innerHTML = currentplayer;
        noOfPlays++
        if(checkWinner()){
            document.getElementById('result').innerHTML = `player ${currentplayer} won`
            isGameOver = true; 

        }
        else if(checkTie()){
            document.getElementById('result').innerHTML = `it is tie`
        }

        else{
            if(currentplayer === 'X'){
                currentplayer = "O"
            }
            else{
                currentplayer = 'X'
            }
            document.getElementById('player-turn').innerHTML = `now it is turn of ${currentplayer}`

        }
        

    }
}

function checkWinner() {
// row
    for(let i=0; i<3; i++){
        if(gameBoard[i][0] === currentplayer && gameBoard[i][1] === currentplayer && gameBoard[i][2] === currentplayer)
        {
            return true
        }
    }
/// column 
    for(let i=0; i<3; i++){
        if(gameBoard[0][i] === currentplayer && gameBoard[1][i] === currentplayer && gameBoard[2][i] === currentplayer)
        {
            return true
        }
    }
 /// diagonal

    if(gameBoard[0][0] === currentplayer && gameBoard[1][1] === currentplayer && gameBoard[2][2] === currentplayer)
        {
            return true
        }

 if(gameBoard[0][2] === currentplayer && gameBoard[1][1] === currentplayer && gameBoard[2][0] === currentplayer)
        {
            return true
        }

}

function checkTie(){
    if(noOfPlays == 9){
        return true;
    }
    return false;

}

function restartGame(){
    gameBoard = [
        ["","",""],
        ["","",""],
        ["","",""]
    ]
    
    currentplayer = 'X';
    noOfPlays = 0;
    isGameOver = false;

    let cells = document.getElementsByClassName('cell');
    //console.log(cells.length)
    for(let i=0; i<cells.length; i++){
        cells[i].innerHTML = ""
    }
}