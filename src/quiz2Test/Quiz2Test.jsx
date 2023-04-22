import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import './Quiz2Test.css'; // импортируем CSS-файл

function Quiz2Test() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]); // массив для хранения ответов пользователя
    const [currentAnswer, setCurrentAnswer] = useState(null);


    const questions = [
        {
            question: "1. Каковы основные элементы формата \"Classic T\"?",
            options: ["Направление, высота и перепад высот.", "Воздушная скорость, тангаж и крен.", "Воздушная скорость, ориентация, высота и направление."],
            answer: "Воздушная скорость, ориентация, высота и направление."
        },
        {
            question: "2. Типичными индикаторами на EHSI являются?",
            options: ["Показания двигателя", "VOR, карта, план и метеорологический радар", "VOR, план, карта и высота полета"],
            answer: "VOR, карта, план и метеорологический радар"
        },
        {
            question: "3. Что означает движение отображаемой взлетно-посадочной полосы на EADI вниз во время финальной стадии захода на посадку?",
            options: ["Полет вниз", "Полет вверх", "Поддержание пути спуска"],
            answer: "Полет вниз"
        },
        {
            question: "4. Во время приближения по инструментальной посадке, если указатель склона пути спуска находится ниже центральной метки, то это означает, что самолет находится",
            options: ["выше пути спуска", "ниже пути спуска", "слева от локатора"],
            answer: "выше пути спуска"
        },
        {
            question: "5. Где отображаются параметры двигателя?",
            options: ["На ЭКАМ", "На EHSI", "На FMSCDU"],
            answer: "На ЭКАМ"
        },
        {
            question: "6. Какой элемент ADI является неподвижным?",
            options: ["Указатель склона пути спуска", "Символ самолета", "Линия бокового отклонения"],
            answer: "Символ самолета"
        },
        {
            question: "8. Какой инструмент показывает восходящую полосу взлетно-посадочной полосы?",
            options: ["ECAM", "EHSI", "EADI"],
            answer: "EADI"
        },

        {
            question: "9. Какие функции доступны на EHSI?",
            options: ["Полный дуговой дисплей и только погода", "Полный дуговой дисплей, погода и режим карты", "Только полный дуговой дисплей"],
            answer: "Полный дуговой дисплей, погода и режим карты"
        },

        {
            question: "10. С радиоуправляемым автопилотом, какие входы?",
            options: ["ADF и VOR", "ILS и VOR", "ADF и ILS"],
            answer: "ILS и VOR"
        },

        // {
        //     question: "11. Какого цвета команды директора полета на дисплее EADI?",
        //     options: ["Голубой", "Пурпурный", "Красный"],
        //     answer: "Пурпурный"
        // },
        //
        // {
        //     question: "12. У систем EFIS две панели управления, какова их цель?",
        //     options: ["Одна для управления типом дисплея EFIS, а другая для выбора источника отображаемой информации.", "Одна для дисплея EADI, а другая для дисплея EHSI.", "Одна для управления дисплеем, а другая для резерва."],
        //     answer: "Одна для управления типом дисплея EFIS, а другая для выбора источника отображаемой информации."
        // },
        //
        // {
        //     question: "13. Что вы ожидаете увидеть на дисплее EADI?",
        //     options: ["Курсовую информацию, метеорадар, предупреждение о точке маршрута и индикаторы направления.", "Показания компаса, выбранный курс и VOR.", "Команды директора полета, индикатор поперечного наклона, скорость до высоты и автоматическую посадку"],
        //     answer: "Команды директора полета, индикатор поперечного наклона, скорость до высоты и автоматическую посадку"
        // }

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

export default Quiz2Test;
