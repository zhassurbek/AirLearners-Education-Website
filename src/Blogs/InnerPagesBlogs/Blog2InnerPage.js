import React from 'react';
import {Container} from 'reactstrap';
import {Link} from 'react-router-dom';

const BlogPage = () => {

    const blogsList =
        {
            id: 2,
            title: "Airbus и Air France запускают первый в мире экологически чистый самолет на водородной технологии.",
            image: "https://t3.ftcdn.net/jpg/01/73/01/74/360_F_173017473_xRG5TrDyf7elY5PPC7Xt89Ar3imtHwF4.jpg",
            description: "Airbus и Air France объявили о запуске первого в мире экологически чистого самолета, который будет работать на водородной технологии. Проект, который был назван ZeroE, использует водородные топливные элементы для создания электрической энергии, которая будет использоваться для питания двигателей самолета. Ожидается, что первые полеты на этом самолете начнутся уже в 2025 году, а регулярные эксплуатация – в 2035 году.\n" +
                "\n" +
                "Этот проект является частью общей стратегии по снижению выбросов углерода и созданию экологически чистых самолетов, которые будут дополнительным шагом на пути к достижению целей Климатического соглашения Парижского соглашения 2015 года. При этом, самолеты являются одним из самых больших источников выбросов парниковых газов в атмосферу.\n" +
                "\n" +
                "ZeroE использует технологию водородных топливных элементов, которая уже используется в автомобильной промышленности, но еще не была ранее использована в авиации. Вместо того, чтобы сжигать топливо в двигателях, ZeroE использует реакцию между водородом и кислородом, которая происходит в топливной ячейке, для создания электрической энергии, которая затем используется для привода двигателей самолета.\n" +
                "\n" +
                "Один из главных преимуществ этой технологии заключается в том, что она позволяет снизить выбросы углерода на 50% по сравнению с современными самолетами, которые работают на традиционном топливе. Кроме того, водородные топливные элементы позволяют значительно уменьшить шум, создаваемый двигателями, что делает полет более комфортным и менее вредным для окружающей среды.\n" +
                "\n" +
                "Однако, проект ZeroE не лишен проблем. В частности, водород представляет собой очень легковоспламеняющееся вещество, и поэтому требует специальных мер предосторожности при хранении и транспортировке. Кроме того, инфраструктура для поддержки использования водорода в авиации еще не полностью развита, но Airbus и Air France уверены в том, что проблемы будут решены к моменту начала эксплуатации самолетов.\n" +
                "\n" +
                "Согласно заявлению компании Airbus, эксплуатация самолетов ZeroE снизит выбросы углерода на 50-100% по сравнению с существующими транспортными средствами, что сделает их самыми экологически чистыми самолетами в истории авиации. Вдобавок, эти самолеты будут намного более тихими, чем существующие модели, что снизит уровень шума вокруг аэропортов и улучшит качество жизни вблизи них.\n" +
                "\n" +
                "Хотя само строительство самолетов ZeroE еще не началось, проект уже вызвал большой интерес со стороны других авиакомпаний. Так, китайская авиакомпания China Eastern Airlines уже заключила сделку с Airbus на покупку 5 самолетов ZeroE. Американский авиаперевозчик Delta Air Lines также выразил заинтересованность в покупке этих самолетов.\n" +
                "\n" +
                "Суммарно, это означает, что проект ZeroE может стать крупнейшим проектом в истории авиации и стимулировать развитие экологически чистых технологий в этой области. Несмотря на сложности, связанные с использованием водорода, самолеты ZeroE могут стать революционным шагом в сокращении выбросов углерода и улучшении качества окружающей среды.",

            content: "There will be content!",
            author: "Temur",
            date: "Май 1, 2023"
        };

    return (
        <section style={{border: '50px', margin: '20px'}}>
            <div style={{margin: '20px'}}>
                <Container style={{
                    border: '1px solid black',
                    borderRadius: '10px',
                    backgroundColor: 'white',
                    padding: '30px 10px 30px 10px'
                }}>
                    <h1 style={{borderTop: '20px'}}>{blogsList.title}</h1>
                    <p style={{margin: '20px'}}>By {blogsList.author} on {blogsList.date}</p>
                    <img style={{display: 'inline-block', alignContent: 'center', verticalAlign: 'middle'}}
                         src={blogsList.image} alt={blogsList.title}/>
                    <p style={{margin: '20px'}}>{blogsList.description}</p>
                    <p style={{margin: '20px'}}>{blogsList.content}</p>
                    <Link to="/blogs" style={{
                        margin: '20px',
                        color: '#ffffff',
                        backgroundColor: '#00ab1e',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        paddingBottom: '20px',
                        padding: '8px',
                        textAlign: 'center'
                    }}>Вернуться назад</Link>
                    <br/>
                </Container>
            </div>
        </section>
    );

};

export default BlogPage;