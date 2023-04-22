import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import './Quiz2Test.css'; // импортируем CSS-файл

function Quiz1Test() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]); // массив для хранения ответов пользователя
    const [currentAnswer, setCurrentAnswer] = useState(null);


    const questions = [
        {
            question: "1. Какого цвета команды директора полета на дисплее EADI?",
            options: ["Голубой", "Пурпурный", "Красный"],
            answer: "Пурпурный"
        },

        {
            question: "2. У систем EFIS две панели управления, какова их цель?",
            options: ["Одна для управления типом дисплея EFIS, а другая для выбора источника отображаемой информации.", "Одна для дисплея EADI, а другая для дисплея EHSI.", "Одна для управления дисплеем, а другая для резерва."],
            answer: "Одна для управления типом дисплея EFIS, а другая для выбора источника отображаемой информации."
        },

        {
            question: "3. Что вы ожидаете увидеть на дисплее EADI?",
            options: ["Курсовую информацию, метеорадар, предупреждение о точке маршрута и индикаторы направления.", "Показания компаса, выбранный курс и VOR.", "Команды директора полета, индикатор поперечного наклона, скорость до высоты и автоматическую посадку"],
            answer: "Команды директора полета, индикатор поперечного наклона, скорость до высоты и автоматическую посадку"
        },

        {
            question: "4. На дисплее EADI отображаются?",
            options: ["Угол тангажа, угол крена и точки маршрута", "Угол тангажа и угол крена", "Курс и метеорологический радар"],
            answer: "Угол тангажа и угол крена"
        },
        {
            question: "5. Что отображается на экране EHSI в режиме карты?",
            options: ["Курс, скорость и высота", "Карта с маршрутом", "Направление ветра и аэропорты"],
            answer: "Карта с маршрутом"
        },
        {
            question: "6. Что означает, если указатель локатора находится правее центра на экране RMI?",
            options: ["Самолет направляется на левый локатор", "Самолет направляется на правый локатор", "Самолет не движется к локатору"],
            answer: "Самолет направляется на правый локатор"
        },
        {
            question: "7. Какие параметры двигателя отображаются на EICAS?",
            options: ["Только температура и давление масла", "Только расход топлива и скорость вращения вала", "Различные параметры, включая температуру, давление, расход топлива и скорость вращения вала"],
            answer: "Различные параметры, включая температуру, давление, расход топлива и скорость вращения вала"
        },
        {
            question: "8. Какие зоны отображаются на экране метеорологического радара в режиме поиска?",
            options: ["Красная зона с белым фоном", "Синяя зона с черным фоном", "Желтая зона с черным фоном"],
            answer: "Синяя зона с черным фоном"
        },
        {
            question: "9. Что отображается на экране EHSI в режиме VOR?",
            options: ["Курсовая стрелка и точки маршрута", "Скорость и высота", "Направление ветра и аэропорты"],
            answer: "Курсовая стрелка и точки маршрута"
        },
        {
            question: "10. Радиовысота отображается в системе EFIS?",
            options: ["На электронном индикаторе горизонтальной обстановки", "На электронном индикаторе направления полета", "на RMI"],
            answer: "На электронном индикаторе направления полета"
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
                <h2>Результаты теста::</h2>
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
            {questionIndex < questions.length ? renderQuiz() : renderResults()}
        </div>
    );
}

export default Quiz1Test;
