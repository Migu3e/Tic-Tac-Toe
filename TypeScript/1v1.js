var currentPlayer = "X";
var gameOver = false;
var cells = document.querySelectorAll(".cell");
var statusElement = document.getElementById("status");
// ניצחונות
var winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // שורות
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // עמודות
    [0, 4, 8], [2, 4, 6] // אלכסונה
];
function updateStatus(message) {
    if (statusElement) {
        statusElement.textContent = message;
    }
    else {
        console.error("Status element not found");
    }
}
function makeMove(index) {
    if (!gameOver && cells[index].textContent === "") {
        cells[index].textContent = currentPlayer;
        checkWin();
        if (!gameOver) {
            switchPlayer();
        }
    }
}
function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    updateStatus(currentPlayer + "'s turn");
}
function checkWin() {
    for (var i = 0; i < winCombos.length; i++) {
        if (cells[winCombos[i][0]].textContent === currentPlayer &&
            cells[winCombos[i][1]].textContent === currentPlayer &&
            cells[winCombos[i][2]].textContent === currentPlayer) {
            updateStatus(currentPlayer + " won da game");
            gameOver = true;
            return;
        }
    }
    var isDraw = true;
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].textContent === "") {
            isDraw = false;
            break;
        }
    }
    if (isDraw) {
        updateStatus("It's a draw!");
        gameOver = true;
    }
}
function resetGame() {
    cells.forEach(function (cell) { return cell.textContent = ""; });
    currentPlayer = "X";
    gameOver = false;
    updateStatus("X's turn");
}
cells.forEach(function (cell, index) {
    cell.addEventListener("click", function () { return makeMove(index); });
});
var resetButton = document.getElementById("reset");
if (resetButton) {
    resetButton.addEventListener("click", resetGame);
}
else {
    console.error("Reset button not found");
}
updateStatus("X's turn");
