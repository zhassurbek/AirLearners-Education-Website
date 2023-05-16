import React, {useState} from 'react';
import "../InnerLessonStyle.css"
import ReactPlayer from "react-player";
import chooseImg from "../../../../../assests/images/why-choose-us.png";
import {Col} from "reactstrap";
import {Link} from "react-router-dom";

// внутренняя страница первого урока

const LessonPage = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [lessonName, setLessonName] = useState('Урок 1. ОБЩИЕ СВЕДЕНИЯ О ПРИБОРНЫХ ДОСКАХ, ПУЛЬТАХ И ПАНЕЛЯХ УПРАВЛЕНИЯ');
    const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/watch?v=YVKdnKH4_08');
    const [lessonDescription2, setlessonDescription2] = useState('');
    const [lessonDescription, setLessonDescription] =
        useState('' +
            '<div>\n' +
            '  <h3>Урок 3</h3>\n' +
            '  <p>Урок 3, пульты и панели управления являются важными элементами электронных систем и приборов. Они используются в широком спектре приложений, начиная от авиационных и автомобильных приборных панелей до промышленных систем управления и систем безопасности.</p>\n' +
            '  <p>Приборные доски представляют собой панели, на которых располагаются различные индикаторы, выключатели и рычаги для управления различными функциями системы. Они могут быть аналоговыми или цифровыми, в зависимости от типа приборов и системы, которой они служат. Обычно они используются в авиации, автомобильной промышленности и промышленной автоматизации.</p>\n' +
            '  <p>Пульты управления - это устройства, которые используются для удаленного управления различными системами и оборудованием. Они могут быть проводными или беспроводными и обычно содержат кнопки, рычаги и дисплеи для отображения информации. Они широко используются в промышленности, телевизионной и радиовещательной отраслях, а также в домашних системах управления.</p>\n' +
            ' <div style={{textAlign: \'center\'}}>\n' +
            '  <img src="https://avatars.dzeninfra.ru/get-zen_doc/35845/pub_5c52ad6178e16700ac2b9c4d_5c52bd91b409f700ad08bbd1/scale_1200" alt="pult" />\n' +
            '</div>\n ' +
            '<br>  <p>Панели управления - это типично плоские панели, на которых располагаются кнопки, индикаторы, дисплеи и другие элементы управления, которые служат для контроля и управления определенными функциями системы. Они часто используются в промышленности и автоматизации, где они служат для управления множеством процессов и систем, таких как управление температурой, освещением, вентиляцией и т.д.</p>\n' +
            '  <p>В общем, приборные доски, пульты и панели управления - это важные элементы в электронных системах и приборах, которые используются в различных областях, где необходим контроль и управление различными функциями системы.</p>\n' +
            '</div>');

    return (<section>

        <div className="container">

            <div className="lesson__inner__title">
                <h2>{lessonName}</h2>
            </div>

            <Col lg="9" md="20">
                <div className="choose__img_lesson">
                    {showVideo ? (
                        <ReactPlayer style={{position: 'center', paddingLeft: '100px'}}
                                     url="https://www.youtube.com/watch?v=YVKdnKH4_08&pp=ygWEAdCe0JHQqdCY0JUg0KHQktCV0JTQldCd0JjQryDQniDQn9Cg0JjQkdCe0KDQndCr0KUg0JTQntCh0JrQkNClLCDQn9Cj0JvQrNCi0JDQpSDQmCDQn9CQ0J3QldCb0K_QpSDQo9Cf0KDQkNCS0JvQldCd0JjQryDQsNCy0LjQsNGG0LjRjw%3D%3D"
                                     controls
                                     width="100%"
                                     height="450px"
                        />
                    ) : (
                        <img src={chooseImg} alt="" className="w-100"/>
                    )}

                    {!showVideo && (
                        <span className="play__icon">
                  <i
                      class="ri-play-circle-line"
                      onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
                    )}
                </div>
            </Col>

            <div className="container">
                <div className="lesson__inner__description"
                     dangerouslySetInnerHTML={{__html: lessonDescription}}>
                </div>
            </div>


            <div className="container">
                {lessonDescription2 &&
                    <div className="lesson__inner__description"
                         dangerouslySetInnerHTML={{__html: lessonDescription2}}>
                    </div>
                }
            </div>
            <Link to="/lesson/quiz/03" style={{margin: '20px', color: '#ffffff', backgroundColor: '#00ab1e', borderRadius: '5px', textDecoration: 'none', paddingBottom: '20px', padding: '8px', textAlign: 'center', fontSize: '25px'}}>Пройти тест</Link>

        </div>
    </section>);
};

export default LessonPage;
