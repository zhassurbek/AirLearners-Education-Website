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
    const [videoUrl, setVideoUrl] = useState('https://youtu.be/jYqEPBm5z8Q');
    const [lessonDescription2, setlessonDescription2] = useState('');
    const [lessonDescription, setLessonDescription] =
        useState('' +
            '<div>\n' +
            '  <h2>ELECTRONIC DISPLAYS</h2>\n' +
            ' <div style={{textAlign: \'center\'}}>\n' +
            '</div>\n ' +
            '<br>  <p>The early EIS displays mimicked the analog display formats for ease in pilot training as the crew transitioned from older analog displays to digital displays that were driven by aircraft data computers, known as display processors or symbol generators. Figure 1-3 depicts an early model Boeing 737 instrument panel with an analog Attitude Direction Indicator (ADI) and analog Horizontal Situation Display (HSI) in the left picture, and a later model B737 instrument panel with electronic ADI (EADI) and electronic HSI (EHSI) displays shown in the right picture. The ADI or EADI is an artificial horizon with lateral bars superimposed to display computer-generated pitch, roll and bank steering commands from the Flight Director computer. The HSI or EHSI is similar to a heading indicator, except that it combines navigation commands from the VHF Omni-Range (VOR) or Global Positioning System (GPS) receivers, which are used for en-route guidance, or from the Instrument Landing System (ILS), which is used for terminal guidance. Besides heading, the HSI/EHSI also provides actual track, desired track, track angle error, drift angle, cross-track deviation, and distance to destination information, from the Distance Measuring Equipment (DME) or Inertial Navigation System (INS). (Figure 1-4) The pilot and the co-pilot not only have independent EA DI and EHSI displays, but they also have independent Display Processor Units, also known as Symbol Generators, to drive their displays (Figure 1-5). Display formats a re produced by the Sy mbol Generators that receive inputs from the crew and various on-board systems. The Flight Director Systems, Navigation Systems, Air Data Systems, and Weather Radar provide inputs to the Symbol Generators, along with commands from the each crewmember’s display control panel. The Symbol Generators produce the graphics for the EADI, EHSI, and an optional Multi-Function Display (MFD) that is mounted in the center instrument panel. The MFD, which is physically identical to the EADI and EHSI, is typically used to display weather radar information; however, it can also be used to display either flight information or navigational information in the event of an EADI or EHSI failure. The following section will discuss the Boeing 777 EIS, which is a more advanced example of the one just covered. </p>\n' +

            '  <h2>ELECTRONIC FLIGHT INSTRUMENT SYSTEM </h2>\n' +
            ' <div style={{textAlign: \'center\'}}>\n' +
            '  <img src={photo} alt="pult" />\n' +
            '</div>\n ' +
            '<br>  <p>The Boeing 777, which first entered service in 1995, has six 8’ × 8" multi-color LCD displays as shown in Figure 1-6. The B777 EIS consists of a dual-redundant Electronic Flight Instrument Systems (EFIS) and Engine Indication and Crew Alerting System (EICAS). On the left side of the instrument panel is the Captain’s EFIS, consisting of a Primary Flight Display (PFD) located outboard and a Navigation Display (ND) located inboard. The Co-Pilot’s EFIS located on the right instrument panel has an identical PFD and ND, located outboard and inboard respectively. All the displays are interchangeable to reduce the number of required spares.</p>\n' +
            '  <img src="https://www.stratosjets.com/wp-content/uploads/2016/03/Citation-Latitude-Cockpit-640x313.jpg" alt="pult" />\n' +

            '  <img src="https://www.skybrary.aero/sites/default/files/PFD_dVer1.jpg" alt="pult" />\n' +
            '  <img src={photo} alt="pult" />\n' +
            '<br>  <p>The information shown on each display, whether for flight or navigation, is determined by what each crew member selects on their individual display control panels. The PFD takes the place of the EADI and displays all the information critical to flight, including attitude, airspeed, barometric altitude, vertical speed, heading, flight modes, radio altitude, ILS data, and Traffic Alert and Collision Avoidance System (TCAS) resolution advisory. The PFDs are designed to increase the crew’s situational awareness by integrating all of this information into a single composite display instead of the crew having to monitor several independent analog instruments. Also, the colors on the display change to alert the crew to potentially hazardous flight conditions, such as low airspeed, high rate of descent, etc. </p>\n' +
            '<br>  <p>Figure 1-7 is a typical Primary Flight Display format showing the artificial horizon in the center of the display, airspeed on the left side, altitude on the right side, heading on the bottom, and flight modes on the top of the display. Notice how the moving ladder format used for altitude and airspeed provide both absolute and relative information so the crew knows not only the exact numeric value, but also the rate that the altitude and airspeed is changing. The Navigation Display, takes the place of the EHSI display to show the requisite information to navigate the aircraft, including heading, VOR, GPS, and ILS guidance. The ND has the ability to overlay additional information on the navigation page to eliminate the need for separate dedicated displays. Some examples of information that is typically overlaid on the ND include weather information from either the onboard weather radar (WXR) or ground based sensors, and digital maps showing pre-programmed routes and waypoints from the Flight Management System.</p>\n' +
            '  <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Primary_Flight_Display_of_a_Boeing_737-800.png" alt="pult" />\n' +

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
                                     url="https://youtu.be/jYqEPBm5z8Q"
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
            <Link to="/lesson/quiz/02" style={{margin: '20px', color: '#ffffff', backgroundColor: '#00ab1e', borderRadius: '5px', textDecoration: 'none', paddingBottom: '20px', padding: '8px', textAlign: 'center', fontSize: '25px'}}>Пройти тест</Link>

        </div>
    </section>);
};

export default LessonPage;
