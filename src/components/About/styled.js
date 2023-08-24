import styled from "styled-components"

export const AboutSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 56px;
    gap: 40px;
    width: 100%;
    background-color: #001245;
    
    div {
        text-align: center;
        
        h1 {
            margin: 0;
            font-size: 48px;
        }

        p {
            text-transform: uppercase;
            color: #D9B70D;
            font-weight: 700;
        }
    }

    ul {
        display: flex;
        justify-content: space-between;
        width: 100%;

        li {
            list-style: none;
            color: #BEE0ED;
        }
    }
`