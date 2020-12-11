import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
    background-color: #f9c511;
    padding: 24px;
    margin-bottom: 64px;
`;

const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const Title = styled.h1`
    font-size: 48px;
    font-weight: normal;
`;

export default function Header({ title }) {
    return (
        <Wrapper>
            <Content>
                <Title>{title}</Title>
            </Content>
        </Wrapper>
    )
}
