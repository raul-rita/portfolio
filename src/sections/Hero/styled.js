import { styled } from "styled-components";
import hero from "/imagens/hero-bg.jpg"

export const HeroSection = styled.section`
    height: 100vh;
    width: 100%;
    background: url(${hero}) no-repeat top center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3.5rem;
    
    p {
        color: var(--primary-color-light);
        font-size: 16px;              
    }

    @media screen and (max-width: 768px) {       
        flex-direction: column;
        gap: 1.5rem;
        justify-content: flex-end;
        padding: 2rem;
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
        font-size: 3rem;        
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
    gap: 1rem;  
    
    ul {
        display: flex;
        gap: 1rem;
    }
`