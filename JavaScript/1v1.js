var currentPlayer = "X";
var gameOver = false;
var cells = document.querySelectorAll(".cell");
var statusElement = document.getElementById("status");

function updateStatus(message) 
{
    if (statusElement)
    {
        statusElement.textContent = message;
    } 
    else
    {
        console.error("Status element not found");
    }
}

function makeMove(index) 
{
    if (!gameOver && cells[index].textContent === "")
    {
        cells[index].textContent = currentPlayer;
        checkWin();
        if (!gameOver)
        {
            switchPlayer();
        }
    }
}

function switchPlayer() 
{
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    updateStatus(currentPlayer + "'s turn");
}

function checkWin()
{
    var winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // שורות
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // עמודות
        [0, 4, 8], [2, 4, 6]              // אלכסונה
    ];

    for (var i = 0; i < winCombos.length; i++)
    {
        if (cells[winCombos[i][0]].textContent === currentPlayer &&
            cells[winCombos[i][1]].textContent === currentPlayer &&
            cells[winCombos[i][2]].textContent === currentPlayer) {
            updateStatus(currentPlayer + " won da game");
            gameOver = true;
            return;
        }
    }

    var isDraw = Array.from(cells).every(cell => cell.textContent !== "");
    if (isDraw) 
    {
        updateStatus("its tie, draw whatever");
        gameOver = true;
    }
}

function resetGame()
{
    cells.forEach(cell => cell.textContent = "");
    currentPlayer = "X";
    gameOver = false;
    updateStatus("X's turn");
}

cells.forEach((cell, index) =>
{
    cell.addEventListener("click", () => makeMove(index));
});

document.getElementById("reset").addEventListener("click", resetGame);

updateStatus("X's turn");