const showMenu = () => {
    while (true) {
        console.log('Menu');
        console.log('1. Start Quiz');
        console.log('2. View High Scores');
        console.log('3. Exit');

        const menuChoice = prompt('Choose an action (Enter 1-3)').trim();

        if (menuChoice === '1') {
            startQuiz();
        } else if (menuChoice === '2') {
            showScores();
        } else if (menuChoice === '3') {
            console.log('Exiting program!')
            break;
        } else {
            console.log('Incorrect input, try again.')
        }
    }
}