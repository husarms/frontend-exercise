import * as React from 'react';
import styled from 'styled-components';
import { localizeDate } from '../utils/date-utils';

const Wrapper = styled.section`
    background-color: white;
`;

const Image = styled.img`
    width: 100%;
    background-color: white;
`;

const Content = styled.div`
    padding-left: 24px;
    padding-right: 24px;
`;

const Title = styled.p`
    font-size: 18px;
    font-weight: 600;
    min-height: 60px;
`;

export default function Card({ image, title, date, author }) {
    return (
        <Wrapper>
            <Image src={image} alt={title} />
            <Content>
                <p>{localizeDate(date)}</p>
                <Title>{title}</Title>
                <p>{author}</p>
            </Content>
        </Wrapper>
    )
}
