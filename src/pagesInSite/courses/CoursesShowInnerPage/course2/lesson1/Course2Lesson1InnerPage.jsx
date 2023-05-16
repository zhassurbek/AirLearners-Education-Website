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
    const [videoUrl, setVideoUrl] = useState('https://youtu.be/jYqEPBm5z8Q');
    const [lessonDescription2, setlessonDescription2] = useState('');
    const [lessonDescription, setLessonDescription] =
        useState('' +
            '<div>\n' +
            '  <h2>ANALOG INSTRUMENTS</h2>\n' +
            ' <div style={{textAlign: \'center\'}}>\n' +
            '</div>\n ' +
            '<br>  <p>Instruments that aid the pilot in controlling the altitude, attitude, airspeed and heading of the aircraft are known as flight instruments. Since the early days of flight there have been four basic flight instruments that have formed the well-known "T" arrangement located in the center of the instrument panel, as shown in Figure 1-1. These four basic instruments are 1) the airspeed indicator, located on the top left, that measures the aircraft’s speed in nautical miles per hour; 2) the attitude indicator, located on top center, that shows the aircraft’s attitude relative to the earth’s horizon; 3) the altimeter, on the top right, that displays the barometric altitude as measured in feet; and 4) the gyro-slaved heading indicator, in the bottom center, which shows which direction the aircraft is flying. These 4 basic flight instruments are typically augmented with a turn-and-bank indicator that displays the rate of turn in the roll axis and amount of bank in the yaw axis, and a vertical speed indicator that displays the rate of ascent or descent in feet per minute. Assuming that the aircraft has radio navigation aids, it will also come equipped with a Radio Magnetic Indicator (RMI) coupled to an Automatic Direction Finder (ADF), and a Course Deviation Indicator (CDI) driven by VHF Omnidirectional Range (VOR) and Instrument Landing System (ILS) receivers. The ILS receiver drives the glide scope needle to set the glide path on an instrument approach and localizer needle provides lateral guidance to the center of the runway. A VHF Marker Beacon may be used in conjunction with the ILS to indicate position along the approach to the runway. These early flight instruments were analog meaning that they contained either mechanical or electro-mechanical rotating mechanisms to drive the pointer dials on the instruments. For example, an analog airspeed indicator receives air pressure from the pitot tube, which expands a bellows that turns the dial on the indicator. With a digital system, the pitot air pressure enters an air data computer that converts the analog information into a digital data stream. Digital data is then sent to the airspeed indicator via an aircraft data bus where the data is converted back into analog signals to drive a pointer dial and/or is displayed digitally in numbers. </p>\n' +

            '  <h2>DIGITAL INSTRUMENTS</h2>\n' +
            ' <div>\n' +
            '  <img   src="https://aeroreport.de/media/pages/good-to-know/gestern-heute-cockpit/heute-cockpit-der-a350/f6ef335342-1625570256/a350.jpg"  alt="pult" />\n' +
            '</div>\n ' +
            '<br>  <p>With the advent of digital electronics in the early 1970’s, Electronic Instrument Systems, also known as "glass cockpits", evolved that were more much more reliable than mechanical or electro-mechanical analog instruments, and had the advantage of combining several flight and navigation functions into one display to provide the crew with greater situational awareness. The first commercial transport aircraft to employ an Electronic Instrument System (EIS) was the McDonnell Douglas MD-80 in 1979. The EIS on the MD-80 used Cathode Ray Tube (CRT) technology. However, during the next 10 years, Liquid Crystal Display (LCD) technology matured thereby replacing CRTs. Flat-panel LCDs are lighter than CRT displays, require less volume, and consume less electrical power, thereby generating less cockpit heat. Glass cockpit configurations vary widely between aircraft models from a single flight and navigation display in a small private aircraft to five or more LCD displays in a commercial transport aircraft. (Figure 1-2) </p>\n' +

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
                                     url="https://youtu.be/1CSKDw9CVLg"
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
