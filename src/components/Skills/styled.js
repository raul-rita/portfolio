import { styled } from "styled-components"

export const SkillsContainer = styled.section `
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

        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;            
            width: 120px;
            height: 120px;
            transition: .5s;

            
            i {
                color: #D9B70D;
                font-size: 48px;
            }
            
            p {
                color: #D9B70D;
                font-weight: 700;
            }
        }
        li:hover {
            box-shadow: 10px 10px 13px -7px #D9B70D;
        }
    }
    
    `