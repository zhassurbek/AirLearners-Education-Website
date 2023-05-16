import React, {useState} from 'react';
import "../InnerLessonStyle.css"
import ReactPlayer from "react-player";
import chooseImg from "../../../../../assests/images/why-choose-us.png";
import {Col} from "reactstrap";
import {Link} from "react-router-dom";

// внутренняя страница первого урока

const LessonPage = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [lessonName, setLessonName] = useState('LESSON 2. ELECTRONIC DISPLAYS AND ELECTRONIC FLIGHT INSTRUMENT SYSTEM');
    const [videoUrl, setVideoUrl] = useState('https://youtu.be/6wxS3bfmiDw');
    const [lessonDescription2, setlessonDescription2] = useState('');
    const [lessonDescription, setLessonDescription] =
        useState('' +
            '<div>\n' +
            '  <h2>BINARY NUMBER SYSTEM CONVERSION </h2>\n' +

            ' <div style={{textAlign: \'center\'}}>\n' +
            '</div>\n ' +
            '<br>  <p>Each binary number column has a decimal value. To convert from decimal to binary, find the binary column that has the largest value but is equal to or smaller than the decimal number being converted. Place a 1 in that column and subtract the column value from the decimal number being converted. Look at the difference. Place a 1 in the column that has the largest value but is equal to or smaller than the decimal number difference of what was just subtracted. Now subtract this column value from the difference of the decimal number being converted and the previous column difference. If a column is not used, place a zero in it. Continue this operation until all of the binary place value columns with 1\'s, when added together, have the same value as the decimal number being converted. Write the number in binary form including a 1 or a 0 for each column. </p>\n' +
            '<br>  <p>Example: Convert the decimal number 100₁₀ to a binary number. Use the binary place value chart in Figure 2-4 to assist in remembering the decimal equivalent value for each binary place value holder. The largest decimal number system value in a binary number system place holder that is less than or equal to 100 is 64. Thus, a 1 is paced in the 64 column (2⁶) of the binary place value chart. Subtract 64 from 100 for a difference of 36. The binary place value holder that is less than or equal to 36 is 32. Place a 1 in the 32 column (2⁵) of the binary place value chart. Subtract 32 from 36 for a difference of 4. The binary place value holder that is less than or equal to 4 is 4. Place a 1 in the 4 column (22) of the binary place value chart. Subtract 4 from 4 for a difference of 0. Since there is nothing left to be converted, place a 0 in all place value columns that do not contain a 1. Write the number using all the 1\'s and 0\'s recorded in the chart from right to left: 1100100₂ = 100₁₀</p>\n' +
            '<br>  <p>To convert a binary number to a decimal number, simply add the column values of the binary place holders with a 1. </p>\n' +
            '<br>  <p>Example: Convert the binary number 10010111 to a decimal number. From left to right, the base-2 values represent by each 1 in this binary number are added together: </p>\n' +
            '<br>  <p>As can be seen, a binary number is typically much longer that its decimal equivalent. However, modern circuits have very fast switching speeds so that the length of binary numbers can be tolerated. This is especially true because of the reliability that is gained from a system that is built from components that are either 1 (ON) or 0 (OFF), that is, either have voltage or do not have voltage. </p>\n' +
            '<br>  <p>128 + 16 + 4 + 2 + 1 = 10010111₂ = 151₁₀</p>\n' +

            '  <h2>OCTAL NUMBER SYSTEM CONVERSION </h2>\n' +

            '<br>  <p>Octal numerals can be made from binary numerals by grouping consecutive binary digits into groups of three. To convert a decimal to an octal number, begin by converting the decimal to a binary number. Then separate the binary number into groups of 3 digits starting from the right. If needed, add implied zeros to the left of the number to form complete groups of 3 digits each. Next, convert each group of 3 digits to an octal value using Figure 2-6.</p>\n' +
            '<br>  <p>Example: Convert the decimal number 100₁₀ to an octal number by first converting it to its binary number of 001100100. Break the binary number into groups of three and convert.</p>\n' +
            '<br>  <p>001 = 1 100 = 4 100 = 4    Octal number = 144c</p>\n' +
            '<br>  <p>So as not to confuse an octal number of 144 with the decimal number of 100, any of the following conventions may be used either before or after the octal number. </p>\n' +
            '<br>  <p>144₈    144base₈    oct 144    0c144   144c</p>\n' +

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
                                     url="https://youtu.be/6wxS3bfmiDw"
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
            <Link to="/lesson/quiz/07" style={{margin: '20px', color: '#ffffff', backgroundColor: '#00ab1e', borderRadius: '5px', textDecoration: 'none', paddingBottom: '20px', padding: '8px', textAlign: 'center', fontSize: '25px'}}>Пройти тест</Link>

        </div>
    </section>);
};

export default LessonPage;
