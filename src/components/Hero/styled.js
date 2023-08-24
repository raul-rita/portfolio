import { styled } from "styled-components";
import hero from "../../images/hero-bg.jpg"

export const HeroSection = styled.section`
    height: 100vh;
    width: 100%;
    background: #001245 url(${hero}) no-repeat top center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 56px;
    
    p {
        color: #BEE0ED;
        font-size: 16px;              
    }

    @media screen and (max-width: 768px) {       
        flex-direction: column;
        gap: 24px;
        justify-content: flex-end;
        padding: 32px;
    }
`

export const PresentationContainer = styled.div` 
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;  

    h1 {             
        font-weight: 700;
        font-size: 48px;        
        margin: 0;
        padding: 0;        
    }

    @media screen and (max-width: 768px) {        
        height: fit-content;
    }
`

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    gap: 16px;

    ul {
        display: flex;
        gap: 40px;

        a i {
            font-size: 40px;
            color: #D9B70D;
            cursor: pointer;
            transition: .5s;
        }

        a i:hover {
            color: #BEE0ED;
        }
    }

`