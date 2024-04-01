import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 30px;
    height: auto;
`;

export const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
`;
