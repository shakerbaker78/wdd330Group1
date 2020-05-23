const player1 = 'X';
const player2 = 'O';
let player = player1;
const colorDefault = "#000000";
const colorWin = "#00900A";
const colorLost = "#BE0000";

function addEventListeners() {
    document.getElementById("topLeft").addEventListener("click", addPiece);
    document.getElementById("topMiddle").addEventListener("click", addPiece);
    document.getElementById("topRight").addEventListener("click", addPiece);
    document.getElementById("middleLeft").addEventListener("click", addPiece);
    document.getElementById("middle").addEventListener("click", addPiece);
    document.getElementById("middleRight").addEventListener("click", addPiece);
    document.getElementById("bottomLeft").addEventListener("click", addPiece);
    document.getElementById("bottomMiddle").addEventListener("click", addPiece);
    document.getElementById("bottomRight").addEventListener("click", addPiece);

    document.getElementById("displayDiv").innerHTML = " Turn player " + (isPlayer1 ? "1" : "2") + " (" + (isPlayer1 ? player1 : player2) + ")";
}


let isPlayer1 = true;

function addPiece(event) { //this = event.target
    if (this.innerHTML == "") {
        player = isPlayer1 ? player1 : player2;
        isPlayer1 = !isPlayer1;
        this.innerHTML = player;
        document.getElementById("displayDiv").innerHTML = " Turn player " + (isPlayer1 ? "1" : "2") + " (" + (isPlayer1 ? player1 : player2) + ")";
    }

    findWinner();
}

function resetBoard() {

    document.getElementById("topLeft").innerHTML = "";
    document.getElementById("topMiddle").innerHTML = "";
    document.getElementById("topRight").innerHTML = "";
    document.getElementById("middleLeft").innerHTML = "";
    document.getElementById("middle").innerHTML = "";
    document.getElementById("middleRight").innerHTML = "";
    document.getElementById("bottomLeft").innerHTML = "";
    document.getElementById("bottomMiddle").innerHTML = "";
    document.getElementById("bottomRight").innerHTML = "";
    isPlayer1 = true;
    player = player1;
    document.getElementById("displayDiv").innerHTML = " Turn player " + (isPlayer1 ? "1" : "2") + " (" + (isPlayer1 ? player1 : player2) + ")";
    document.getElementById("displayDiv").style.color = colorDefault;
}

function findWinner () {
    const topLeft = document.getElementById('topLeft');
    const middleLeft = document.getElementById('middleLeft');
    const bottomLeft = document.getElementById('bottomLeft');
    const topMiddle = document.getElementById('topMiddle');
    const middle = document.getElementById('middle');
    const bottomMiddle = document.getElementById('bottomMiddle');
    const topRight = document.getElementById('topRight');
    const middleRight = document.getElementById('middleRight');
    const bottomRight = document.getElementById('bottomRight');

    if ((topLeft.innerHTML == topMiddle.innerHTML == topRight.innerHTML) || (middleLeft.innerHTML == middle.innerHTML == middleRight.innerHTML)) {
        if (topMiddle.innerHTML == "X") {
            alert("Player 1 wins!")    
        } 
        else {      
            alert("Player 2 wins!")  
         }
        }
    else if ((topMiddle.innerHTML == middle.innerHTML == bottomMiddle.innerHTML) || (topRight.innerHTML == middleRight.innerHTML == bottomRight.innerHTML))  {   
        if (topMiddle.innerHTML == "X") {
             alert("Player 1 wins!")    
        }

        // KATE 7 8 9 bottomLeft bottomMiddle bottomRight
        if (bottomLeft != "" && bottomMiddle != "" && bottomRight != "") {
            if (bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
                if (bottomLeft == player1) {
                    document.getElementById("displayDiv").innerHTML = ("Player 1 wins!");
                }
                else {
                    document.getElementById("displayDiv").innerHTML = ("Player 2 wins!");
                }
                completeBoard();
                document.getElementById("displayDiv").style.color = colorWin;
            }
        }

        // Kate 1 4 7 topLeft middleLeft bottomLeft
        if (topLeft != "" && middleLeft != "" && bottomLeft != "") {
            if (topLeft === middleLeft && topLeft === bottomLeft) {
                if (topLeft == player1) {
                    document.getElementById("displayDiv").innerHTML = ("Player 1 wins!");
                }
                else {
                    document.getElementById("displayDiv").innerHTML = ("Player 2 wins!");
                }
                completeBoard();
                document.getElementById("displayDiv").style.color = colorWin;
            }
        }

        else if ((bottomLeft.innerHTML == bottomMiddle.innerHTML == bottomRight.innerHTML) ||(topLeft.innerHTML == topMiddle.innerHTML ==  bottomRight.innerHTML)){
            if (bottomLeft.innerHTML == "X"){
            alert("Player 1 wins")
        }
    }
}

function completeBoard() {
    if (document.getElementById("topLeft").innerHTML == "")
        document.getElementById("topLeft").innerHTML = "-";
    if (document.getElementById("topMiddle").innerHTML == "")
        document.getElementById("topMiddle").innerHTML = "-";
    if (document.getElementById("topRight").innerHTML == "")
        document.getElementById("topRight").innerHTML = "-";
    if (document.getElementById("middleLeft").innerHTML == "")
        document.getElementById("middleLeft").innerHTML = "-";
    if (document.getElementById("middle").innerHTML == "")
        document.getElementById("middle").innerHTML = "-";
    if (document.getElementById("middleRight").innerHTML == "")
        document.getElementById("middleRight").innerHTML = "-";
    if (document.getElementById("bottomLeft").innerHTML == "")
        document.getElementById("bottomLeft").innerHTML = "-";
    if (document.getElementById("bottomMiddle").innerHTML == "")
        document.getElementById("bottomMiddle").innerHTML = "-";
    if (document.getElementById("bottomRight").innerHTML == "")
        document.getElementById("bottomRight").innerHTML = "-";
}



