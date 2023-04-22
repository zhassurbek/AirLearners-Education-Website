import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Quiz() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);

    const questions = [
        {
            question: 'What is the capital of France?',
            options: ['Paris', 'Berlin', 'Rome', 'Madrid'],
            answer: 'Paris'
        },
        {
            question: 'What is the tallest mountain in the world?',
            options: ['K2', 'Mount Everest', 'Makalu', 'Cho Oyu'],
            answer: 'Mount Everest'
        },
        // Добавьте оставшиеся вопросы
    ];

    const handleAnswerSubmit = (answer) => {
        const currentQuestion = questions[questionIndex];
        const isCorrectAnswer = answer === currentQuestion.answer;
        setAnswers([...answers, { question: currentQuestion.question, answer, isCorrect: isCorrectAnswer }]);
        if (isCorrectAnswer) {
            setScore(score + 1);
        }
        setQuestionIndex(questionIndex + 1);
    };

    const renderResults = () => {
        return (
            <div>
                <h2>Quiz Results:</h2>
                <p>Score: {score} / {questions.length}</p>
                <ol>
                    {answers.map((answer, index) => (
                        <li key={index}>
                            <p><strong>{answer.question}</strong></p>
                            <p>Your answer: {answer.answer}</p>
                            <p>Correct answer: {questions.find(q => q.question === answer.question).answer}</p>
                            {answer.isCorrect ? <p>Correct!</p> : <p>Incorrect</p>}
                        </li>
                    ))}
                </ol>
            </div>
        );
    };

    const handlePreviousQuestion = () => {
        setQuestionIndex(questionIndex - 1);
    }

    const renderQuiz = () => {
        const currentQuestion = questions[questionIndex];
        return (
            <Form>
                <Form.Group>
                    <Form.Label>{currentQuestion.question}</Form.Label>
                    {currentQuestion.options.map((option) => (
                        <div key={option} className="mb-3">
                            <Form.Check
                                type="radio"
                                label={option}
                                value={option}
                                name="answer"
                                onChange={(e) => handleAnswerSubmit(e.target.value)}
                            />
                        </div>
                    ))}
                </Form.Group>
                <Button variant="primary" type="submit" onClick={() => handleAnswerSubmit(null)}>
                    Next Question
                </Button>
                {questionIndex > 0 && (
                    <Button variant="secondary" type="button" onClick={handlePreviousQuestion}>
                        Previous Question
                    </Button>
                )}
            </Form>
        );
    };

    // const renderQuiz = () => {
    //     const currentQuestion = questions[questionIndex];
    //     return (
    //         <Form>
    //             <Form.Group>
    //                 <Form.Label>{currentQuestion.question}</Form.Label>
    //                 {currentQuestion.options.map((option) => (
    //                     <div key={option} className="mb-3">
    //                         <Form.Check
    //                             type="radio"
    //                             label={option}
    //                             value={option}
    //                             name="answer"
    //                             onChange={(e) => handleAnswerSubmit(e.target.value)}
    //                         />
    //                     </div>
    //                 ))}
    //             </Form.Group>
    //             <Button variant="primary" type="submit" onClick={() => handleAnswerSubmit(null)}>
    //                 Next Question
    //             </Button>
    //         </Form>
    //     );
    // };

    return (
        <div>
            {questionIndex < questions.length ? renderQuiz() : renderResults()}
        </div>
    );
}

export default Quiz;
