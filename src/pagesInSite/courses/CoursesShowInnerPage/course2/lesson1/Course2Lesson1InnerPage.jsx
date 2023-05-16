import React, {useState} from 'react';
import "../InnerLessonStyle.css"
import ReactPlayer from "react-player";
import chooseImg from "../../../../../assests/images/why-choose-us.png";
import {Col} from "reactstrap";
import {Link} from "react-router-dom";
import plane1 from "../../../../../assests/images/course1lesson1.png"

// внутренняя страница первого урока

const LessonPage = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [lessonName, setLessonName] = useState('Lesson 1. ANALOG AND DIGITAL INSTRUMENTS');
    const [videoUrl, setVideoUrl] = useState('https://youtu.be/6wxS3bfmiDw');
    const [lessonDescription2, setlessonDescription2] = useState('');
    const [lessonDescription, setLessonDescription] =
        useState('' +
            '<div>\n' +
            '  <h2>DECIMAL Numbers</h2>\n' +
            ' <div style={{textAlign: \'center\'}}>\n' +
            '</div>\n ' +
            '<br>  <p>DECIMAL Numbers are used to describe the quantity of something. A numbering system is a written system for expressing numbers as symbols. All numbering systems have bases to understand how the numbering system works. For example, the symbol "10" could mean "ten" in decimal form (base-10) or it could mean "two" in binary form (base-2). To differentiate between them, express a decimal as 10base₁₀ or 10₁₀. The most common numbering system that is used in everyday life is the decimal system. The prefix in the word "decimal" is a Latin root for the word "ten". Thus, the decimal system uses ten different symbols (0, 1, 2, 3, 4, 5, 6, 7, 8, and 9) and is referred to as a base-10 numbering system. To represent a number higher than 9, go to the next digit placement, such that 10 means zero units of one and one unit of ten. At the last symbol, a new placement is created to the left and counted up, so that 100 appears after 99, and so on. Each additional placement is an additional power of 10. Knowing this will help in understanding the other bases.</p>\n' +
            '  <h2>BINARY</h2>\n' +
            '<br>  <p>The binary number system has only two symbols: 0 and 1. The prefix in the word "binary" is a Latin root for the word "two", and as such, is referred to as a base-2 numbering system. The use of the binary numbering system is based on the fact that switches or valves have two states: OPEN or CLOSED (ON or OFF). Primary uses of the binary number system include computer architecture and digital electronics. In computers, information is stored as a series of 0\'s and 1\'s, forming strings of binary numbers known as machine language. Similarly, the binary number system is used in digital electronics because the two basic conditions of electricity, ON and OFF, can represent the two digits of the binary number system. When a switch is ON, it represents the digit 1, and when it is OFF, it represents the digit 0. Millions and even billions of tiny switches are arranged so that digital devices can perform the functions they do with a binary number system. It is easy to recognize a binary number when written because it only uses 1\'s and 0\'s. To ensure it is not mistaken for another number system expression, a binary number system numeral may be written with a prefix or suffix that indicates it is binary. Binary number system identifiers are shown in the following example. There are others. The value of all of the binary numbers shown in this example is the same (11 in the decimal number system). 1011₂ 1011base₂ bin 1011 0b1011 1011b When reading or pronouncing a binary number, it is common to simply say "1" or "0" moving from left to right until all the digits are pronounced. To read 1011₂, say: "one, zero, one, one"</p>\n' +

            '  <h2>PLACE VALUES</h2>\n' +
            ' <div>\n' +
            // '  <img   src="https://aeroreport.de/media/pages/good-to-know/gestern-heute-cockpit/heute-cockpit-der-a350/f6ef335342-1625570256/a350.jpg"  alt="pult" />\n' +
            '</div>\n ' +
            '<br>  <p>As stated previously, the decimal number system used in everyday life is a base-10 system. There are 10 symbols available for use as place value holders; 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. When positioned in a number, they are also positioned to represent a place value. If 9 is exceeded, the place value resets to 0 and a 1 must be placed in the next place value column to the left. Figure 2-1 illustrates the decimal number system place values. They are derived by sequentially raising 10 to a higher power moving from right to left. Thus, each position has a value 10 times that of the position to its right. The binary number system is a base-2 system. There are 2 digits available for use as place value holders; 0 and 1. Each place value in the binary number system represents 2 raised to a sequentially higher power from right to left. This is similar to the decimal system used in everyday life. Figure 2-2 illustrates the place values of the binary number system. It shows to what power 2 is raised to establish value and the decimal number system equivalent of each place. Each place value position has a value 2 times that of the position to its right. Remember, when writing binary numbers and placing digits in positions of place value, the only digits available are 0 and 1. To exceed 1, the place value is reset to 0 and a 1 is placed in the next place value column to the left. Place values are used to convert our everyday decimal numbers to binary numbers.</p>\n' +
            '<br>  <p>Figure 2-3 illustrates how binary numbers are formed by placing a 1 or a 0 in the binary place value positions. Binary digits are called "bits". The Least Significant Bit (LSB) on the far right of the binary place value position table is 2⁰, which equals 1. In this last column, alternate every other time going down the column inserting 1s and 0s. Likewise, the next LSB is 21, or 2, which means alternate every 2 times down the column inserting 1s and 0s, and so forth. Likewise, at the Most Significant Bit (MSB) on the far left side of the binary place value position table, alternate 23 or every 8 times between 1s and 0s to form the binary equivalent of the decimal number shown in the far left column.</p>\n' +
            '  <h2>OCTAL</h2>\n' +
            '<br>  <p>The binary numbering system requires many bits to represent relatively small numbers. In the preceding example, it required 8 binary bits (10010111) to represent a 3-digit decimal (151). As such, analyzing the numerical states of digital logic using the binary numbering system can become quite tedious for computer programmers developing machine language code. For this reason, place-weighted numbering systems, such as octal, were developed. The prefix in the word "octal" is a Latin root for the word "eight", and as such, it is referred to as a base-8 numbering system. Octal has 8 symbols available as place value holders (0, 1, 2, 3, 4, 5, 6, and 7). As shown in Figure 2-5, each place weight differs from the one next to it by a factor of 8, instead of only by a factor of 2 as in the binary system. To convert an octal number to a decimal, one must multiply the value of the power of 8 depending on where the digit falls on the above octal place value chart. Example: Convert octal number 42 to a decimal. The least significant digit of 2 is multiplied by 8⁰, which is 1, and the next digit of 4 is multiplied by 81, which is 8. The results are then added as shown below. 2 × 1 = 2 4 × 8 = 32 2 + 32 = 34</p>\n' +


            //
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
            <Link to="/lesson/quiz/06" style={{margin: '20px', color: '#ffffff', backgroundColor: '#00ab1e', borderRadius: '5px', textDecoration: 'none', paddingBottom: '20px', padding: '8px', textAlign: 'center', fontSize: '25px'}}>Пройти тест</Link>

        </div>
    </section>);
};

export default LessonPage;
