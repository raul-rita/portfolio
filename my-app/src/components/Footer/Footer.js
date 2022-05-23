import React from "react";
import github from "../../img/github.png"
import linkedin from "../../img/linkedin.png"
import instagram from "../../img/instagram.png"
import { BoxLinks, Container } from "./styled";

const Footer = () => {
    return (
        <Container>
            <BoxLinks>
                <a href="https://www.github.com/raul-rita" target="_blank">
                    <img src={github} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/raul-rita" target="_blank">
                    <img src={linkedin} alt="linkedin" />
                </a>
                <a href="https://www.instagram.com/raulrita.tech" target="_blank">
                    <img src={instagram} alt="instagram" />
                </a>            
            </BoxLinks>

            <p>Desenvolvido por Raul Rita</p>   
        </Container>
    )   
}

export default Footer