import React, {useState} from 'react';
import "../InnerLessonStyle.css"
import ReactPlayer from "react-player";
import chooseImg from "../../../../../assests/images/why-choose-us.png";
import {Col} from "reactstrap";
import {Link} from "react-router-dom";

// внутренняя страница первого урока

const LessonPage = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [lessonName, setLessonName] = useState('LESSON 3. ENGINE INDICATION AND CREW ALERTING SYSTEM');
    const [videoUrl, setVideoUrl] = useState('https://youtu.be/NG0RCQUfpfc');
    const [lessonDescription2, setlessonDescription2] = useState('');
    const [lessonDescription, setLessonDescription] =
        useState('' +
            '<div>\n' +
            '  <h2>ENGINE INDICATION AND CREW ALERTING SYSTEM</h2>\n' +
            ' <div style={{textAlign: \'center\'}}>\n' +

            '</div>\n ' +
            '<br>  <p>The Boeing Engine Indication and Crew Alerting System (EICAS), also called an Electronic Centralized Aircraft Monitor (ECAM) on Airbus aircraft, performs the monitoring of aircraft systems that was previously performed by the Flight Engineer in three crew member cockpits. As previously shown in Figure 1-6, the two EICAS displays on the B777 are located in the center instrument panel. The upper EICAS display shows engine performance data, such as pressure ratio, N1 rotor speed, exhaust gas temperature, total air temperature, thrust mode, etc., in addition to cabin pressure, flat/slat position, landing gear position, and crew status alerts. (Figure 1-9) </p>\n' +
            '  <img src="https://i.pinimg.com/originals/b1/24/9b/b1249bf2e89d60ab9a0bdb5e955fbab3.png" alt="pult" />\n' +
            '<br>  <p>The EICAS engine display format mimics the round analog instruments, while also providing digital readouts of the parameters. EICAS improves situational awareness by allowing the crew to see systems operation in graphical format and alerting them to any failures or impending failures. For example, if low oil pressure is detected, the EICAS will provide an aural alert and show to the oil pressure page on a lower display with a red box outlining which engine has low oil pressure. The Airbus ECAM system provides the crew with the following levels of warning along with detailed messages as to the nature of the problem and suggested courses of action.</p>\n' +
            '<br>  <p>• Level 3: An overspeed, fire, or stall condition will cause a repetitive chime aural warning with a bright red flashing light. </p>\n' +
            '<br>  <p>• Level 2: A system failure, but not a safety of flight issue, will result in a single chime aural warning and a steady amber light. </p>\n' +
            '<br>  <p>• Level 1: Failure leading to system degradation results only in an amber light.</p>\n' +
            '<br>  <p>• Mode or System Status: If everything is normal, a green light will illuminate.</p>\n' +
            '  <img src="https://thumbs.dreamstime.com/b/navigation-display-17671967.jpg" alt="pult" />\n' +
            '<br>  <p>The lower EICAS display is called a Multi-Function Display because it provides auxiliary information to the flight crew and maintenance crew. The MFD can be used as a secondary engine display, status display, communications display, maintenance page, or electronic checklist. The MFD formats also include synoptic displays that provide system status diagrams for the fuel, electrical, hydraulic, flight control, and environmental control systems, in addition to showing door and landing gear positions. On some aircraft, the MFD is also used to display images from the ground maneuvering camera system. Figure 1-10 is a schematic diagram of an Engine Indication and Crew Alerting System with all its associated components. The display select panel allows the crew to choose which computer is actively supplying information. It also controls the display of secondary engine information and system status displays on the lower monitor.</p>\n' +
            '  <img src="https://preview.redd.it/4ef3irfd3r961.jpg?auto=webp&s=a432138758a9f993059dc711a2f59254d3bfba51" alt="pult" />\n' +
            '<br>  <p>EICAS has a unique feature that automatically records the parameters of a failure event to be regarded afterwards by maintenance personnel. Pilots that suspect a problem may be occurring during flight can press the event record button on the display select panel. This also records the parameters for that flight period to be studied later by maintenance. Hydraulic, electrical, environmental, performance, and Auxiliary Power Unit (APU) data are examples of what may be recorded. EICAS uses Built-In-Test Equipment (BITE) for systems and components. A maintenance control panel is included for technicians. When the aircraft is on the ground, push-button switches display information pertinent to various systems for analysis. (Figure 1-11) This sub-module contained an overview of a state-ofthe-art aircraft cockpit with its Electronic Instrument System. The following chapters will discuss how digital data streams are formed and processed by aircraft computers and then sent over digital data buses to cockpit displays to provide essential information for the flight crew and maintenance crew.</p>\n' +
            '  <img src="https://i.ytimg.com/vi/uQmnDFP1mAU/sddefault.jpg" alt="pult" />\n' +

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
                                     url="https://youtu.be/NG0RCQUfpfc"
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
