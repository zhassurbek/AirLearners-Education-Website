import React from 'react';
import {Container} from 'reactstrap';
import './textbooks.css';

const documents = [
    {
        name: 'EASA-Part-66-Module-5-Digital-Techniques-Electronic-Instrument-Systems-4-Days',
        url: '/documents/EASA-Part-66-Module-5-Digital-Techniques-Electronic-Instrument-Systems-4-Days.pdf',
    },
    {
        name: 'module-5-sample',
        url: '/documents/module-5-sample.pdf',
    },
    {
        name: 'Учебное пособие Кузнецов Электронные приборные системы',
        url: '/documents/Учебное%20пособие%20Кузнецов%20Электронные%20приборные%20системы.pdf',
    },
];

const DocumentsList = () => {
    return (
        <Container style={{marginTop: '50px', marginBottom: '50px', borderRadius: '50px'}}>
            <section>
                <div>
                    <h1>Список документов</h1>
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
                               style={{color: 'orange', display: 'inline'}}>
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