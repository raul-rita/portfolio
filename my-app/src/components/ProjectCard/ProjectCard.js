import React from "react";
import { Card, TextBox } from "../../components/ProjectCard/styled";


const ProjectCard = () => {
    return (
        <Card>
            <img src={"https://via.placeholder.com/250"} />
            <TextBox>
                <h3>Nome do projeto</h3>
                <p>descrição do projeto descrição do projeto descrição do projeto descrição do projeto
                    descrição do projeto descrição do projeto descrição do projeto descrição do projeto
                    descrição do projeto descrição do projeto descrição do projeto descrição do projeto
                </p>
            </TextBox>
        </Card>
    )
}

export default ProjectCard;