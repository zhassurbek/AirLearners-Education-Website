import React from 'react';
import {Container} from 'reactstrap';
import './textbooks.css';

const documents = [
    {
        name: 'EASA-Part-66-Module-5-Digital-Techniques-Electronic-Instrument-Systems-4-Days',
        url: 'https://drive.google.com/file/d/1cK04yh8glb_XU7LJYog7DE4_UufVlKsP/view?usp=share_link',
    },
    // {
    //     name: 'module-5-sample',
    //     url: '/documents/module-5-sample.pdf',
    // },
    {
        name: 'Учебное пособие Кузнецов Электронные приборные системы',
        url: 'https://drive.google.com/file/d/15saaFoLbZOx3rjgMqlHtlY4a76Jse2gt/view?usp=share_link',
    },
];
const documents_word = [
    {
        name: 'NUMBERING SYSTEMS',
        url: 'https://docs.google.com/document/d/1tAsMRtGrbuGQcj8e002zj3hhFP8u9Uxy/edit?usp=share_link&ouid=103040182438994217378&rtpof=true&sd=true',
    },
    {
        name: 'ELECTRONIC INSTRUMENT SYSTEM',
        url: 'https://docs.google.com/document/d/1gyEcmjFhC6OmDsj91jB_YQyZ7uKt5aZn/edit?usp=share_link&ouid=103040182438994217378&rtpof=true&sd=true',
    },
    {
        name: 'DATA CONVERSION',
        url: 'https://docs.google.com/document/d/19azyrdtQ1NgNbPzNNxqHFMlsjsh3Apql/edit?usp=share_link&ouid=103040182438994217378&rtpof=true&sd=true',
    },
];

const DocumentsList = () => {
    return (
        <Container style={{marginTop: '50px', marginBottom: '50px', borderRadius: '50px'}}>
            <section>
                <div>
                    <h1 className="h1TextBooks">Список документов</h1>
                    {documents.map((doc, index) => (
                        <div className="div-documents" key={index} style={{margin: '20px'}}>
                            <div style={{
                                marginRight: '10px',
                                display: 'inline',
                                backgroundColor: 'white',
                                padding: '5px',
                                borderRadius: '5px',
                                border: '1px solid white'
                            }}>PDF
                            </div>
                            <a href={doc.url} target="_blank" rel="noopener noreferrer"
                               style={{color: 'orange', display: 'inline', textDecoration: 'none'}}>
                               {/*style={{color: 'rgba(0,105,255,0.72)', display: 'inline'}}>*/}
                                {doc.name}
                            </a>
                        </div>


                    ))}
                    {documents_word.map((doc, index) => (
                        <div className="div-documents" key={index} style={{margin: '20px'}}>
                            <div style={{
                                marginRight: '10px',
                                display: 'inline',
                                backgroundColor: 'white',
                                padding: '5px',
                                borderRadius: '5px',
                                border: '1px solid white'
                            }}>DOC
                            </div>
                            <a href={doc.url} target="_blank" rel="noopener noreferrer"
                               style={{color: 'orange', display: 'inline', textDecoration: 'none'}}>
                                {/*style={{color: 'rgba(0,105,255,0.72)', display: 'inline'}}>*/}
                                {doc.name}
                            </a>
                        </div>


                    ))}
                </div>
            </section>
        </Container>
    );
};

export default DocumentsList;