import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import "./quiz1.css"

function Quiz() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);

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
        }
    ];

    const handleAnswerSubmit = (answer) => {
        setAnswers([...answers, answer]);
        setQuestionIndex(questionIndex + 1);
    };

    return (
        <div className="container">
            <div>
                {questionIndex < questions.length ? (
                    <Form>
                        <Form.Group>
                            <Form.Label>{questions[questionIndex].question}</Form.Label>
                            {questions[questionIndex].options.map((option) => (
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
                    </Form>
                ) : (
                    <div>
                        <h2>Quiz Results:</h2>
                        <ul>
                            {answers.map((answer, index) => (
                                <li key={index}>{answer}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Quiz;
