import React from 'react';
import { Container } from 'reactstrap';

const BlogPage = ({ blog }) => {
    return (
        <Container>
            <h1>{blog.title}</h1>
            <img src={blog.image} alt={blog.title} />
            <p>{blog.description}</p>
            <p>{blog.content}</p>
        </Container>
    );
};

export default BlogPage;
