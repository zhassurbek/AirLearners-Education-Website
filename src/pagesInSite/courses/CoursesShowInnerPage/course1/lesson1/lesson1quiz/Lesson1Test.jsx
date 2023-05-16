import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import './Quiz2Test.css';
import {Link} from "react-router-dom";

// тело первого текста которое будет отображаться внутри первого теста

function Lesson1Test() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]); // массив для хранения ответов пользователя
    const [currentAnswer, setCurrentAnswer] = useState(null);


    const questions = [
        {
            question: "1. What are the basic elements for 'Classic T' format?",
            options: ["Direction, altitude and height.", "Airspeed, pitch and roll.", "Airspeed, attitude, altitude and direction."],
            answer: "Airspeed, attitude, altitude and direction."
        },

        {
            question: "2. Typical displays on an EHSI are",
            options: ["Engine indications.", "VOR, Map, Plan and weather radar", "VOR, Plan, Map and Attitude"],
            answer: "VOR, Map, Plan and weather radar"
        },

        {
            question: "3. An EADI display showing a moving runway moves down during the final stages of an approach. The aircraft must.",
            options: ["fly down", "fly up", "hold descent path."],
            answer: "Команды директора полета, индикатор поперечного наклона, скорость до высоты и автоматическую посадку"
        },

        {
            question: "4. During an instrument approach, the glideslope pointer eflects below the glideslope centre mark. This means the aircraft is positioned.",
            options: ["above the glideslope.", "below the glideslope.", "to the left of the localiser."],
            answer: "above the glideslope."
        },
        {
            question: "5. Engine parameters are displayed on.",
            options: ["ECAM", "EHSI", "FMSCDU"],
            answer: "ECAM"
        },
    ];

    const handleAnswerSubmit = () => {
        const currentQuestion = questions[questionIndex];
        const isCorrectAnswer = currentAnswer === currentQuestion.answer;
        if (isCorrectAnswer) {
            setScore(score + 1);
        }
        // сохраняем ответ пользователя в массиве userAnswers
        setUserAnswers([...userAnswers, {question: currentQuestion.question, answer: currentAnswer}]);
        setQuestionIndex(questionIndex + 1);
        setCurrentAnswer(null);
    };

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
                                checked={currentAnswer === option}
                                onChange={(e) => setCurrentAnswer(e.target.value)}
                            />
                        </div>
                    ))}
                </Form.Group>
                <div className="button-group"> {/* добавляем дополнительный div */}
                    {questionIndex > 0 && (
                        <Button
                            variant="secondary"
                            type="button"
                            className="mx-2 mr-4" // добавляем margin-right
                            onClick={() => setQuestionIndex(questionIndex - 1)}
                        >
                            Предыдущий
                        </Button>
                    )}
                    <Button
                        variant="primary"
                        type="button"
                        disabled={!currentAnswer}
                        onClick={() => handleAnswerSubmit()}
                    >
                        {questionIndex === questions.length - 1 ? "Закончить" : "Следующий"}
                    </Button>
                </div>
            </Form>
        );
    };


    const renderResults = () => {
        const uniqueQuestions = [...new Set(questions.map(question => question.question))];
        return (
            <div>
                <h2>Результаты теста:</h2>
                <p>Баллы: {score} / {questions.length}</p>
                <h3>Ответы:</h3>
                <ol>
                    {uniqueQuestions.map((question, index) => {
                        const questionObj = questions.find(q => q.question === question);
                        // Получаем ответ пользователя для текущего вопроса
                        const userAnswerObj = userAnswers.find(ans => ans.question === questionObj.question);
                        const userAnswer = userAnswerObj ? userAnswerObj.answer : "Not answered";
                        return (
                            <li key={index}>
                                <p style={{
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    marginBottom: '10px'
                                }}>{questionObj.question}</p>
                                <p style={{marginBottom: '5px'}}>Правильный ответ: {questionObj.answer}</p>
                                <p style={{marginBottom: '5px'}}>Ваш ответ: {userAnswer}</p>
                            </li>
                        );
                    })}
                </ol>
            </div>
        );
    };


    return (
        <div className="container quiz2test">
            {questionIndex < questions.length ? (
                renderQuiz()
            ) : (
                <div>
                    {renderResults()}
                    <br/>
                    <Link
                        to="/course/01"
                        style={{
                            margin: '20px',
                            color: '#ffffff',
                            backgroundColor: '#00ab1e',
                            borderRadius: '5px',
                            textDecoration: 'none',
                            paddingBottom: '20px',
                            padding: '8px',
                            textAlign: 'center',
                            fontSize: '25px'
                        }}
                    >
                        Пройти к курсам
                    </Link>
                </div>
            )}
        </div>
    );

}

export default Lesson1Test;
