import React from 'react';
import {Container} from 'reactstrap';
import {Link} from 'react-router-dom';

const BlogPage = () => {

    const blogsList =
        {
            id: 1,
            title: "Boeing получил заказ на 200 самолетов 737 MAX от авиакомпании Southwest Airlines",
            image: "https://t3.ftcdn.net/jpg/01/73/01/74/360_F_173017473_xRG5TrDyf7elY5PPC7Xt89Ar3imtHwF4.jpg",
            description: "Американский авиаконцерн Boeing получил крупный заказ на 200 самолетов модели 737 MAX от одной из крупнейших авиакомпаний США, Southwest Airlines. " +
                "\nСделка на сумму около 25 миллиардов долларов поможет Boeing увеличить свои производственные мощности и восстановить доверие клиентов после нескольких катастроф, связанных с моделью 737 MAX. " +
                "\n\nНапомним, что из-за проблем с автопилотом этой модели произошли несколько авиакатастроф, в результате чего погибли более трехсот человек. В связи с этим Boeing приостановил производство самолетов 737 MAX на несколько месяцев, однако сейчас компания надеется восстановить свои позиции на рынке и вернуться к увеличению объемов производства. " +
                "\n\nНесколько лет назад авиакомпания Southwest Airlines была одним из первых клиентов Boeing, которые заказали новую версию самолета 737 - 737 MAX. Однако после двух катастроф с участием 737 MAX в 2018 и 2019 годах, авиакомпания отменила множество рейсов и временно прекратила использование этих самолетов. В связи с этим заказ на 200 самолетов 737 MAX от Southwest Airlines, стоимостью около $25 миллиардов, является для Boeing важным шагом во восстановлении доверия клиентов и повышении производственных мощностей. Благодаря этому сделке Boeing сможет вернуться к полной загрузке производственных линий и увеличить объемы производства, что поможет компании восстановить лидерство на рынке гражданской авиации.",
            content: "There will be content!",
            author: "Temur",
            date: "Май 1, 2023"
        };

    return (
        <section style={{ border: '50px', margin: '20px'}}>
            <div style={{margin: '20px'}}>
            <Container style={{ border: '1px solid black', borderRadius: '10px', backgroundColor: 'white', padding: '30px 10px 30px 10px' }}>
                <h1 style={{borderTop: '20px'}}>{blogsList.title}</h1>
                <p style={{margin: '20px'}}>By {blogsList.author} on {blogsList.date}</p>
                <img style={{display: 'inline-block', alignContent: 'center', verticalAlign: 'middle'}} src={blogsList.image} alt={blogsList.title} />
                <p style={{margin: '20px'}}>{blogsList.description}</p>
                <p style={{margin: '20px'}}>{blogsList.content}</p>
                <Link to="/blogs" style={{margin: '20px', color: '#ffffff', backgroundColor: '#00ab1e', borderRadius: '5px', textDecoration: 'none', paddingBottom: '20px', padding: '8px', textAlign: 'center'}}>Вернуться назад</Link>
                <br/>
            </Container>
            </div>
        </section>
    );

};

export default BlogPage;
