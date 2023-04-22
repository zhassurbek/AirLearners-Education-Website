import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import './Quiz2Test.css'; // импортируем CSS-файл

function Quiz3Test() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]); // массив для хранения ответов пользователя
    const [currentAnswer, setCurrentAnswer] = useState(null);


    const questions = [
        {
            question: "1. Какие индикаторы отображаются на EADI в системе EFIS?",
            options: ["Отклонение крена, отклонение тангажа, датчик угла атаки", "Расстояние до полосы, решающая высота, датчик бокового скольжения", "Радиовысотомер, датчик решающей высоты, компас"],
            answer: "Отклонение крена, отклонение тангажа, датчик угла атаки"
        },
        {
            question: "2. Что входит в электронный индикаторный комплекс (EFIS)?",
            options: ["Дисплей EHSI, панель управления режимом полета, дисплей EADI", "Скоростной указатель, высотомер, вариометр, датчик скорости", "Символьный генератор, ИСС, EHSI"],
            answer: "Дисплей EHSI, панель управления режимом полета, дисплей EADI"
        },
        {
            question: "3. Что входит в комплекс EFIS в современном воздушном судне?",
            options: ["Радиовысотомер, скоростной вектор, навигационные данные", "Дисплей EHSI, EADI, символьный генератор", "Дисплей ND, радиовысотомер, датчик угла атаки"],
            answer: "Дисплей EHSI, EADI, символьный генератор"
        },
        {
            question: "4. Каким цветом обозначаются индикации приборов ILS на PFD/ND?",
            options: ["Голубым", "Пурпурным", "Зеленым"],
            answer: "Пурпурным"
        },
        {
            question: "5. На каких режимах на ND не может быть отображено изображение погодного радара?",
            options: ["Дуговых", "Навигационных роз", "Плановых"],
            answer: "Плановых"
        },


        {
            question: "6. В типичной системе наведения коммерческого самолета...",
            options: ["тип информации, отображаемой на индикаторе директора ориентации, отображается на прозрачной пластине", "вся приборная информация отображается на лобовом стекле", "На экран пилота выводятся только аварийные показания или предупреждения"],
            answer: "тип информации, отображаемой на индикаторе директора ориентации, отображается на прозрачной пластине"
        },
        {
            question: "7. Современный электронный индикатор горизонтальной обстановки отображает следующее:",
            options: ["Путевые точки, информация о рулении ILS, расстояние до цели и магнитное направление", "Скорость на земле, магнитный курс, путевые точки и локализатор", "Информация о рулении ILS, информация руководителя полета и отклонение от глиссады"],
            answer: "Путевые точки, информация о рулении ILS, расстояние до цели и магнитное направление"
        },
        {
            question: "8. Панели кокпита имеют матовую окраску. Это сделано для того, чтобы...",
            options: ["чтобы пилоты чувствовали себя более комфортно в дневное время", "чтобы количество бликов было минимальным", "чтобы пыль и грязь были менее заметны на панелях"],
            answer: "чтобы количество бликов было минимальным"
        },
        {
            question: "9. Полная установка EFIS в самолете состоит из...",
            options: ["Любое из перечисленного", "правый (капитан) и левый (второй пилот)", "левый (капитан) и правый (второй пилот)"],
            answer: "Любое из перечисленного"
        },
        {
            question: "10. На современном самолете со \"стеклянной кабиной\" информация о работе двигателя отображается на",
            options: ["FMS", "EFIS", "ECAM"],
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

export default Quiz3Test;
