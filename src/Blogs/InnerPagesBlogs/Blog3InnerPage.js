import React from 'react';
import {Container} from 'reactstrap';
import {Link} from 'react-router-dom';

const BlogPage = () => {

    const blogsList =
        {
            id: 3,
            title: "Норвежский авиаперевозчик Widere объявил о первой в мире коммерческой электрического самолета.",
            image: "https://t3.ftcdn.net/jpg/01/73/01/74/360_F_173017473_xRG5TrDyf7elY5PPC7Xt89Ar3imtHwF4.jpg",
            description: "Норвежский авиаперевозчик Widerøe объявил о запуске первой в мире коммерческой эксплуатации электрического самолета, что может стать значимым событием в истории авиации. Этот электрический самолет, разработанный компанией Eviation, способен перевозить 9 пассажиров на расстояние до 650 км на одном заряде. Это открывает новые возможности для экологически чистого авиатранспорта, и, возможно, может снизить углеродный след авиации.\n" +
                "\n" +
                "Проект электрического самолета, названного Alice, был анонсирован компанией Eviation в 2017 году. Этот самолет имеет необычный внешний вид с тремя двигателями на хвосте и большим собранным на крыле блоком аккумуляторов, который похож на огромный прямоугольный ящик. Аккумуляторы обеспечивают летательному аппарату мощность в 980 кВтч, что позволяет ему лететь со скоростью до 445 км/ч и на расстояние до 650 км на одном заряде.\n" +
                "\n" +
                "Первые рейсы Alice запланированы на 2026 год, и они будут осуществляться на коротких и средних дистанциях в северной Европе. Widerøe планирует заказать 12 таких самолетов и использовать их для перевозки пассажиров по маршрутам в Норвегии. Кроме того, компания Eviation уже получила заказы на 130 электрических самолетов от компаний из США и Израиля.\n" +
                "\n" +
                "Новый самолет может изменить взгляд на авиацию и стать первым шагом в создании нового типа воздушных судов, которые будут экологически чистыми и эффективными. Однако, проблемы, связанные с зарядкой, скоростью и максимальной дальностью полета, все еще присутствуют, и потребуется значительное время и инвестиции, чтобы решить эти вопросы и расширить использование электрических самолетов.",
            content: "",
            author: "Temur",
            date: "Апрель 29, 2023"
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
