import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styled";
import {goToAboutPage, goToBackgroundPage, goToHomePage} from "../../routes/coordinator"

const Header = () => {

    const navigate = useNavigate()

    return (
        <Container>
            <a onClick={() => goToHomePage(navigate)}>HOME</a>
            <a onClick={() => goToAboutPage(navigate)}>SOBRE</a>
            <a onClick={() => goToBackgroundPage(navigate)}>PROJETOS</a>
        </Container>
    )   
}

export default Header