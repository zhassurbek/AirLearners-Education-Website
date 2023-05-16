import React, {useState} from 'react';
import "../InnerLessonStyle.css"
import ReactPlayer from "react-player";
import chooseImg from "../../../../../assests/images/why-choose-us.png";
import {Col} from "reactstrap";
import {Link} from "react-router-dom";

// внутренняя страница первого урока

const LessonPage = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [lessonName, setLessonName] = useState('Lesson 1. ANALOG AND DIGITAL DATA CONVERSIONS');
    const [videoUrl, setVideoUrl] = useState('https://youtu.be/qzkwXRJt44s');
    const [lessonDescription2, setlessonDescription2] = useState('');
    const [lessonDescription, setLessonDescription] =
        useState('' +
            '<div>\n' +
            ' <br> <h2>ANALOG DATA</h2>\n' +

            ' <div style={{textAlign: \'center\'}}>\n' +
            '</div>\n ' +
            '<br>  <p>Analog and digital signals can both contain the same useful information. For example, an analog watch with hands pointing to numbers on a dial tells time just as well as a LCD watch that displays digital numbers. The advantage of the analog watch is that is that it tells time in relative terms, such as ¼ past the 11th hour; whereas the digital watch tells time in discrete units, such as 11:15am. Many cockpit instruments display both analog and digital formats.</p>\n' +
            '<br>  <p>Analog circuits are different from digital circuits in that they do not have two set values, such as 0 volts representing "OFF" and 5 volts representing "ON". Instead, analog circuits will vary continuously in both time and value from high to low. AC (alternating current) analog signals can be bipolar in that they have both positive and negative limits as seen in an AC sine wave. Figure 3-1 illustrates the sine wave output of an AC synchro transmitter that varies in value (amplitude) from 0 volts to its +5 volt limit and returns to 0 volts before moving to its -5 volt limit and then back to 0 volts in one time cycle. DC (direct current) analog signals are unipolar in that they will have 0 volts as one of its limits with either a positive or a negative voltage defining its other analog signal voltage range limit. </p>\n' +
            '<br>  <p>Analog signals have the advantage in that they can represent any functional quantity, such as time, temperature, pressure, etc., by outputting an equivalent functional quantity of voltage or current. Prime examples are aircraft fuel quantity and oil pressure analog synchro systems. By locating the transmitter of a synchro system remotely, fluid pressure can be directed into it without the necessity of running tubing through to the cockpit.</p>\n' +
            '<br>  <p>Inside the transmitter, the motion of a pressure bellows can be geared to the transmitter rotor in such a way as to make the rotor turn. (Figure 3-2) As in all synchros, the transmitter rotor turns proportional to the pressure sensed, which vary the voltages set up in the windings of the synchro stator. These voltages are transmitted to the indicator coils that develop the magnetic field that positions the pointer. Aircraft with digital instrumentation make use of pressure sensitive solidstate sensors that output digital signals for collection and processing by dedicated computers. Others may retain their analog sensors, but may forward this information through an analog-to-digital (A/D) converter for a computer to process and store the digital information for cockpit displays.</p>\n' +
            ' <br> <h2>DIGITAL DATA </h2>\n' +
            '<br>  <p>Analog circuits and devices vary continuously in both time and value from high to low; however, digital data are discrete and discontinuous representations of information. Digital signals are different from analog signals in that there are only two (binary) levels of voltage: high for "ON" and low for "OFF". These different voltage levels are put into a sequence of digital numbers to describe the value being transmitted. As stated in the previous sub-module, the binary number system is used in digital electronics because the two basic conditions of electricity, ON and OFF, can represent the two digits of the binary number system. When a switch is ON, it represents the digit 1, and when it is OFF, it represents the digit 0.</p>\n' +

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
                                     url="https://youtu.be/qzkwXRJt44s"
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
            {/*<Link to="/lesson/quiz/08" style={{margin: '20px', color: '#ffffff', backgroundColor: '#00ab1e', borderRadius: '5px', textDecoration: 'none', paddingBottom: '20px', padding: '8px', textAlign: 'center', fontSize: '25px'}}>*/}
            {/*    Пройти тест</Link>*/}

        </div>
    </section>);
};

export default LessonPage;
