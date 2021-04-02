// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

export const Title = styled.h1`
    font-size:larger;
    color:${(props) => (props.isBlue ? 'blue' : 'red')};
    background:aqua;
    text-align:center;
    font-size:large;
    small{
        font-size:smaller;
        background: #d4d4d4;
    }
`;

export const Paragraph = styled.p`
    text-align:right;
`;
