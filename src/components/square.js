import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 33.33%;
    height: 33.33%;
    flex-shrink: 1;
    border-right: 1px solid #363635;
    border-bottom: 1px solid #363635;
    text-align: center;
    font-size: 30px;
    display: block;
    cursor: pointer;
`;

const Square = ({ state, onClick }) => (
    <Button onClick={onClick}>
        {state}
    </Button>
);

export default Square;