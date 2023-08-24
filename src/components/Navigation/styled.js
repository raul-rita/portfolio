import styled from 'styled-components'

export const NavigationBar = styled.div `
    background-color: #00124550;
    display: flex;
    width: 100%;
    height: 48px;
    justify-content: center;
    align-items: center;
    position: fixed;

    ul {
        display: flex;
        gap: 16px;
        list-style: none;
    }

    li a{
        text-decoration: none;
        color: #D9B70D;
        font-weight: 700;
        transition: .5s;
    }

    li a:hover {          
        color: #BEE0ED;
    }

    @media screen and (max-width: 768px) {  
        display: none;
    }
`