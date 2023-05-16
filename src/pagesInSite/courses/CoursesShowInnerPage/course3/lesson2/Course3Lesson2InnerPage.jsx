import React, {useState} from 'react';
import "../InnerLessonStyle.css"
import ReactPlayer from "react-player";
import chooseImg from "../../../../../assests/images/why-choose-us.png";
import {Col} from "reactstrap";
import {Link} from "react-router-dom";

// внутренняя страница первого урока

const LessonPage = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [lessonName, setLessonName] = useState('Lesson 2. ANALOG TO DIGITAL AND DIGITAL TO ANALOG CONVERSIONS');
    const [videoUrl, setVideoUrl] = useState('https://youtu.be/qzkwXRJt44s');
    const [lessonDescription2, setlessonDescription2] = useState('');
    const [lessonDescription, setLessonDescription] =
        useState('' +
            '<div>\n' +
            '  <h2>ANALOG TO DIGITAL CONVERSION</h2>\n' +


            ' <div style={{textAlign: \'center\'}}>\n' +
            '</div>\n ' +
            '<br>  <p>As shown in Figure 3-3, an Analog-to-Digital Converter (ADC) is a device that converts a continuous input voltage to a digital data stream that represents the amplitude of the input analog signal. As such, the ADC performs conversions periodically by sampling and quantizing the input signal over a very short period of time. The result is a sequence of digital numbers that have been converted from continuous time and amplitude analog signals to discrete time and amplitude digital signals.</p>\n' +
            '<br>  <p>To begin the analog-to-digital data conversion process, the voltage range is divided into 2ⁿ equal bins and then sampled continuously. This value sampled is held until the next sample is taken. The ADC generates binary numbers that represents each voltage level sampled. If the voltage is divided into 2¹ bins it will generate 2 bits per sample. As shown in Figure 3-4, the first sample generates binary output 01 to represent 1 volt measured at the first interval, and the second sample results in a binary output of 10 which represents 2 volts at the second interval, and so on.</p>\n' +
            '<br>  <p>Clearly the digital representation of the analog waveform shown in Figure 3-4 is a distorted version of the original analog signal, although the basic similarity of the two can be discerned. Errors are produced by dividing the voltage range into bins that implies conversion back to the original analog signal will produce the exact same values. Quantization error can be reduced by generating more bits per sample, with each bit occupying less of the overall voltage range. </p>\n' +
            '<br>  <p>For example, a 4-bit ADC will sample 24 or 16 voltage bands, which is its decimal equivalent value of dynamic range. Dynamic range is the ratio of the largest input that can be converted to the smallest step size. For example, a 4-bit ADC with an input of 0 to 5 volts has a quantization step size of 5 volts / 16 bands = 0.3125. Therefore, the dynamic range is calculated to be 5 / 0.3125 = 16.</p>\n' +
            '  <br /><h2> DIGITAL TO ANALOG CONVERSION</h2>\n' +

            '<br>  <p>Digital-to-Analog Converters (DACs) are found in everyday use. For example, digital information stored on Digital Video Discs (DVD) and Compact Disc (CD) use DACs to convert digital data streams to analog music and video signals. Digital-to-analog is the reverse of the above A/D conversion process such that each binary number is converted back into nominal levels by reconstructing the original waveform. </p>\n' +
            '<br>  <p>As shown in Figure 3-5, a DAC is a device that reconstructs finite-precision time series data in to a continuously varying signal, which theoretically can have an infinite number of states. In simple terms, it takes binary numbers, or combination of binary numbers, and changes them into corresponding voltages, such that, for example, binary number 1 equals 1 volt, binary number 2 equals 2 volts, binary number 3 equals 3 volts, and so on. Figure 3-3. Symbol for an analog to digital converter. 11 10 01 00 Vin Vout Figure 3-4. Analog-to-digital conversion by sampling and quantizing. </p>\n' +
            '<br> <br>  <p>A typical DAC converts a sequence of binary digits (bits) into "impulses" that are then processed by a reconstruction filter to smooth out the step response into continuous curves. These impulses are created by updating the analog voltage output at uniform sampling intervals, controlled by a clock signal, which are then interpolated by a low-pass reconstruction filter to fill in the gaps between the impulses creating a continuously varied output. (Figure 3-6)</p>\n' +
            '<br>  <p> Other DAC methods produce a pulse-modulated signal that can then be filtered in a similar way to produce a smoothly varying signal. </p>\n' +
            '<br>  <p>Figure 3-7 is a schematic diagram of a 4-bit resistorladder DAC with an op-amp. This DAC converts a binary input to a matching decimal number that corresponds to the output voltage. The numbers 1, 2, 4, and 8 refer to the relative weights assigned to each bit whereby input "1" is the Least Significant Bit (LSB) and input "8" is the Most Significant Bit (MSB). </p>\n' +
            '<br>  <p>Thus if a +5 volts (logic 1) is applied to input "1", the output will be 5 × (4 000 ohms/20 000 ohms) = 5 × 0.2 = 1 volt.</p>\n' +
            '<br>  <p> If instead +5 volts is applied to input "2", the output will be 5 × (4 000 ohms/10 000 ohms) = 5 × 0.4 = 2 volts. </p>\n' +
            '<br>  <p>Similarly, if either the "4" or "8" inputs are logic 1, then the output will be either 4 volts or 8 volts respectively. However, if +5 volts is applied to all 4 terminals simultaneously, the output will be 15 volts, representing the binary number input 1111. As a result, the output voltage can be one of 16 different voltages (including zero), in accordance with the input binary codes of 0000 through 1111 as shown on the corresponding table. </p>\n' +
            '  <br /><h2>LIMITATIONS OF CONVERSION </h2>\n' +
            '<br>  <p>As previously discussed, analog signals are converted into digital signals so that the information is manipulated by instructions executed within a computer and then converted back to analog signals to drive analog display formats (such as hands on a clock) that are easily recognized by the crew. However, reconstructing a signal from digital-to-analog or from analog-to-digital can degrade the signal by introducing errors, also known as noise. Reconstruction noise, as well as sampling noise from quantization, not only combine in the final signal, but also compound over multiple stages of conversion resulting in a loss of quality, or fidelity, of the original signal. All though not apparent, the waveform shown at the bottom of Figure 3-8 is a distorted version of the original waveform shown at the top of Figure 3-8. </p>\n' +
            '<br>  <p>A prime example of an everyday device that converts analog signals to digital and back to analog signals is a telephone. The microphone on the phone receives sound pressure from the sender’s voice, which produces an analog signal. The analog signal is converted to a digital signal which is then transmitted through the airwaves to the receiver’s phone.</p>\n' +
            '<br>  <p>Once received, it is converted back into an analog signal to drive the coil on the speaker to replicate the sender’s voice. However, it is well known that the quality of the sender’s voice on the phone will always be of less quality (fidelity) as compared to hearing the person speak in person. As such, it is important to recognize that signal degradation is a known limitation of multiple conversions.</p>\n' +


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
            {/*<Link to="/lesson/quiz/07" style={{margin: '20px', color: '#ffffff', backgroundColor: '#00ab1e', borderRadius: '5px', textDecoration: 'none', paddingBottom: '20px', padding: '8px', textAlign: 'center', fontSize: '25px'}}>Пройти тест</Link>*/}

        </div>
    </section>);
};

export default LessonPage;
