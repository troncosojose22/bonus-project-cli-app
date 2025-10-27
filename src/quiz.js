// Import functions
const prompt = require('prompt-sync')({ sigint: true });


// Array of objects holding the high scores
const highScores = [
    {
        name: 'Jose',
        score: 80,
        date: '10/26/25',
    },
    {
        name: 'Sangha',
        score: 60,
        date: '10/27/25',
    }
];
// Array of objects holding the quiz questions
const quizQuestions = [
    {
        question: 'What is the largest country in the world by land area?',
        choices: ['United States', 'China', 'Russia', 'India'],
        answerIndex: 2,
    },
    {
        question: 'What is the main ingredient in guacamole?',
        choices: ['Avocado', 'Pepper', 'Lime', 'Pear'],
        answerIndex: 0,
    },
    {
        question: 'Where was the first example of paper money used?',
        choices: ['China', 'Turkey', 'Greece', 'Egypt'],
        answerIndex: 0,
    },
    {
        question: 'Which horoscope sign is a fish?',
        choices: ['Aquarius', 'Cancer','Scorpio','Pisces'],
        answerIndex: 3,
    },
    {
        question: 'What is the strongest muscle in the human body?',
        choices: ['Heart', 'Jaw', 'Glutes', 'Quads'],
        answerIndex: 1,
    }
]

const startQuiz = () => {
    let currentScore = 0;
    let questionCount = 0;
    let averageScore;
    // Iterate through our quiz questions array
    for (let i = 0; i < quizQuestions.length; i++) {
        // Print the current question 
        console.log(`Question ${i + 1}: ${quizQuestions[i].question}`);
        // Print multiple choice options
        console.log(`1) ${quizQuestions[i].choices[0]}`);
        console.log(`2) ${quizQuestions[i].choices[1]}`);
        console.log(`3) ${quizQuestions[i].choices[2]}`);
        console.log(`4) ${quizQuestions[i].choices[3]}`);

        const correctAnswer = quizQuestions[i].answerIndex;
        // Store the user answer
        const userAnswer = prompt('\nEnter your answer (1-4): ').trim();
        console.clear();
        // Convert the answer into a number for proper comparison
        const numberAnswer = parseInt(userAnswer);

        // Check if the answer is correct
        if (numberAnswer === correctAnswer + 1) {
            // Increment the current score if so
            currentScore += 1;
            // Increment the current question count
            questionCount++;
            // Get the current average score
            averageScore = (currentScore / questionCount) * 100;
            // Log current stats
            console.log('\nCorrect! Well done!');
            console.log(`Current Score: ${currentScore}/${questionCount} (${Math.round(averageScore)}%)`);
            prompt('\nPress Enter to continue...');
            console.clear();
            continue;
        } 
        questionCount++;
        averageScore = (currentScore / questionCount) * 100;
        // Log current stats
        console.log('\nWrong answer!');
        console.log(`The correct answer was ${quizQuestions[i].choices[correctAnswer]}!`);
        console.log(`Current Score: ${currentScore}/${questionCount} (${Math.round(averageScore)}%)`);
        prompt('\nPress Enter to continue...');
        console.clear()
    }
    console.log('Quiz Complete!')
    console.log(`Final Score: ${currentScore}/${questionCount} (${Math.round(averageScore)}%)\n`)
    
    // return the player score
    return Math.round(averageScore);
}

const showScores = () => {
    console.log('Highscores:')
    // iterate thru the highScores array and print out all the scores
    for (let i = 0; i < highScores.length; i++) {
        console.log(`${i + 1}. ${highScores[i].score} (${highScores[i].name}) - ${highScores[i].date}`)
    }
}

const addHighScore = (name, score) => {
    let date = new Date();
    date = date.toLocaleDateString();
    const player = {
        name,
        score,
        date,
    }
    if (highScores.length < 5 && score <= highScores[highScores.length - 1].score) {
        highScores.push(player);
        return;
    }
    // Iterate through our high scores array, once we find where our new high score should be inserted
    // We splice it into the array
    for (let i = 0; i < highScores.length;  i++) {
        if (score > highScores[i].score) {
            highScores.splice(i, 0, player);
            break;
        }
    }
    // If there are more than 5 high scores, remove the last one
    if (highScores.length > 5) {
        highScores.pop();
    }
}

const isHighScore = score => {
    // If there is less than 5 high scores, we return to true since we will add it to the leaderboard
    if (highScores.length < 5) {
        return true;
    }
    // If our current score is greater than the minimun highest score, we have a high score
    if (score > highScores[highScores.length - 1].score) {
        return true;
    }
    // Not a high score
    return false;
}

module.exports = {
    isHighScore,
    addHighScore,
    showScores,
    startQuiz,
};