import styled from 'styled-components'

export const NavigationBar = styled.div `
    background-color: var(--primary-color);
    display: flex;
    width: 100%;
    height: 3rem;
    justify-content: center;
    align-items: center;
    position: fixed;

    ul {
        display: flex;
        gap: 1rem;
        list-style: none;
    }

    li a{
        text-decoration: none;
        color: var(--second-color);
        font-weight: 700;
        transition: .5s;
    }

    li a:hover {          
        color: var(--primary-color-light);
    }

    @media screen and (max-width: 768px) {  
        display: none;
    }
`