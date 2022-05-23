import styled from "styled-components";

export const ProfileCard = styled.div `
    display: flex;
    justify-content: space-between;
    background-image: linear-gradient(90deg, #000000 40%, #4a783c);
    padding: 50px 200px 0px 100px;

    img {
        align-items: center ;
    }
`

export const BoxApresentation = styled.div `
    display: flex;
    flex-direction: column;   
    justify-content: center;
    width: 380px;
    gap: 10px;

    div {
        display: flex;
        justify-content: space-between; 
        
    }

    p {
        color: #bab8b5;
        font-size: 40px;
        margin: 0;
    }

    a {
        color: #4a783c;
        background-color: #bab8b5;
        width: 180px;
        padding: 15px 0;
        text-align: center;
        text-decoration: none;
        
    }

    a:hover {
        background-color: #daa520;
    }
`
export const ContainerSkills = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #4a783c;
    padding: 50px;

    p {
        font-size: 40px;
        font-weight: bold;
        margin: 0 0 50px 0;
    }
`
export const ContainerCards = styled.div `
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
`

export const SkillsCard = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(186, 184, 181, 0.4);
    width: 250px;
    height: 250px;
    border-radius: 20px;
    gap: 20px;

    img {
        height: 60px;
    }

    p {
        font-size: 30px;
        font-weight: normal;
        margin: 0;
    }
`
