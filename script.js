let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;
const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

function handleSquareClick(index) {
    if (board[index] === '' && !gameOver) {
        board[index] = currentPlayer;
        updateUI();

        if (checkWin()) {
            document.getElementById('status').textContent = `Player ${currentPlayer} Wins! 🎉`;
            gameOver = true;
            return;
        }

        if (checkDraw()) {
            document.getElementById('status').textContent = "It's a Draw! 🤝";
            gameOver = true;
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('status').textContent = `Player ${currentPlayer}'s Turn`;
    }
}

function checkWin() {
    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] === currentPlayer && board[b] === currentPlayer && board[c] === currentPlayer) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return board.every(square => square !== '');
}

function updateUI() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square, index) => {
        square.textContent = board[index];
        square.classList.remove('x', 'o');
        if (board[index] === 'X') {
            square.classList.add('x');
        } else if (board[index] === 'O') {
            square.classList.add('o');
        }
    });
}

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    document.getElementById('status').textContent = `Player ${currentPlayer}'s Turn`;
    updateUI();
}

document.addEventListener('DOMContentLoaded', () => {
    updateUI();
});