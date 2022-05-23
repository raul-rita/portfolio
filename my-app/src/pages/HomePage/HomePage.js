import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import selfie from "../../img/selfie.PNG"
import html from "../../img/html.png"
import { BoxApresentation, ContainerSkills, ProfileCard, SkillsCard, ContainerCards } from "./styled";

const HomePage = () => {
    
    return (
        <div>
            <Header />
                <ProfileCard>
                    <img src={selfie} />
                    <BoxApresentation>
                        <p>RAUL RITA</p>
                        <p>Desenvolvedor Fron-end</p>
                        <div>
                            <a href="https://github.com/raul-rita" target="_blank">GITHUB</a>
                            <a href="https://linkedin.com/in/raul-rita" target="_blank">LINKEDIN</a>
                        </div>
                    </BoxApresentation>
                </ProfileCard>

                <ContainerSkills>
                    <p>HABILIDADES</p>

                    <ContainerCards>
                        <SkillsCard>
                            <img src={html} />
                            <p>HTML 5</p>
                        </SkillsCard>

                        <SkillsCard>
                            <img src={html} />
                            <p>HTML 5</p>
                        </SkillsCard>

                        <SkillsCard>
                            <img src={html} />
                            <p>HTML 5</p>
                        </SkillsCard>

                        <SkillsCard>
                            <img src={html} />
                            <p>HTML 5</p>
                        </SkillsCard>

                        <SkillsCard>
                            <img src={html} />
                            <p>HTML 5</p>
                        </SkillsCard>

                        <SkillsCard>
                            <img src={html} />
                            <p>HTML 5</p>
                        </SkillsCard>

                        <SkillsCard>
                            <img src={html} />
                            <p>HTML 5</p>
                        </SkillsCard>

                        <SkillsCard>
                            <img src={html} />
                            <p>HTML 5</p>
                        </SkillsCard>
                    </ContainerCards>
                </ContainerSkills>
               
            <Footer />
        </div>
    )
}

export default HomePage