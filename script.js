
const userChoiceImg = document.getElementById('userChoice');
const cpuChoiceImg = document.getElementById('cpuChoice');
const resultText = document.getElementById('resultText');


const options = ['rock', 'paper', 'scissors'];


function getCpuChoice() {
    const randomChoice = Math.floor(Math.random() * 3); // 0, 1, 2
    return options[randomChoice];
}


function playGame(userChoice) {
    const cpuChoice = getCpuChoice();
    

    userChoiceImg.src = `./${userChoice}.png`;
    cpuChoiceImg.src = `./${cpuChoice}.png`;

    if (userChoice === cpuChoice) {
        resultText.textContent = "It's a tie!";
    } else if (
        (userChoice === 'rock' && cpuChoice === 'scissors') ||
        (userChoice === 'paper' && cpuChoice === 'rock') ||
        (userChoice === 'scissors' && cpuChoice === 'paper')
    ) {
        resultText.textContent = "You win!";
    } else {
        resultText.textContent = "CPU wins!";
    }
}


document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
