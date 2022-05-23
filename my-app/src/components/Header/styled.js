import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: linear-gradient(90deg, #000000 50%, #4a783c);
    height: 12vh;

    a {
        color: #bab8b5;
        font-size: 20px;
    }

    a:hover {
        font-size: 25px;
        font-weight: bold;
        color: #daa520;
        cursor: pointer;
    }
`