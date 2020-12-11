import * as React from "react";
import { getBlogPosts } from "../api/blog-api";
import Header from "../components/Header";
import Card from "../components/Card";
import styled from 'styled-components';

const BlogPostContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 48px;
    padding: 24px;
    max-width: 1200px;
    margin: 0 auto;
`;

export default function BlogView() {
    const [blogPosts, setBlogPosts] = React.useState([]);
    React.useEffect(() => {
        getBlogPosts().then((blogPosts) => {
            setBlogPosts(blogPosts);
        });
    }, []);
    return (
        <React.Fragment>
            <Header title={'Talk Therapy Blog'} />
            <BlogPostContainer>
                {blogPosts.map((post) =>   
                    <Card
                        key={post.id}
                        image={post.image}
                        title={post.title}
                        date={post.date_created}
                        author={post.author}
                    />
                )}
            </BlogPostContainer>
        </React.Fragment>
    );
}
