// Import functions
const prompt = require('prompt-sync')();


// Array holding the high scores
const highScores = [];
// Array of object holding the quiz questions
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
        const userAnswer = prompt('Enter your answer (1-4)').trim();
        // Convert the answer into a number for proper comparison
        const numberAnswer = parseInt(userAnswer);

        // Check if the answer is correct
        if (numberAnswer === correctAnswer + 1) {
            // Increment the current score if so
            currentScore += 1;
            // Increment the current question count
            questionCount++;
            averageScore = (currentScore / questionCount) * 100;
            console.log('Correct! Well done!');
            console.log(`Current Score: ${currentScore}/${questionCount} (${Math.round(averageScore)}%)`);
            continue;
        } 
        questionCount++;
        averageScore = (currentScore / questionCount) * 100;
        console.log('Wrong answer!');
        console.log(`The correct answer was ${quizQuestions[i].choices[correctAnswer]}!`);
        console.log(`Current Score: ${currentScore}/${questionCount} (${Math.round(averageScore)}%)`);
    }
    console.log('Quiz Complete!')
    console.log(`Final Score: ${currentScore}/${questionCount} (${Math.round(averageScore)}%)`)
}

const showScores = () => {

}