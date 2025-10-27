const prompt = require('prompt-sync')({ sigint: true });
const {isHighScore, addHighScore, showScores, startQuiz} = require('./quiz.js');

const showMenu = () => {
    while (true) {
        console.log('Menu:');
        console.log('1. Start Quiz');
        console.log('2. View High Scores');
        console.log('3. Exit');

        const menuChoice = prompt('Choose an action (Enter 1-3): ').trim();
        console.clear();

        if (menuChoice === '1') {
            const playerScore = startQuiz();
            // Check if we have a high score
            if (isHighScore(playerScore)) {
                console.log('Congratulations! You scored a high score!');
                const userName = prompt('Enter your name: ');
                // Add the high score to the leaderboard
                addHighScore(userName, playerScore);
                console.log('\nHigh Score recorded!')
                prompt('\nPress Enter to continue...');
                console.clear();
            }
        } else if (menuChoice === '2') {
            // Show scores
            showScores();
            prompt('\nPress Enter to continue...');
            console.clear();
        } else if (menuChoice === '3') {
            console.log('Exiting program!')
            break;
        } else {
            console.log('Incorrect input, try again.')
        }
    }
}

module.exports = showMenu;