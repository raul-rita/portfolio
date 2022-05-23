import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    align-items: center;
    background-image: linear-gradient(90deg, #000000 50%, #4a783c);
    height: 20vh;

    p {
        color: #b1b8b5;
    }
`

export const BoxLinks = styled.div `
    display: flex;
    gap: 60px;
    
    img {
        height: 50px;
    }

    img:hover {
        height: 55px;
    }
`