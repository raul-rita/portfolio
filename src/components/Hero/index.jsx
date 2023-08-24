import { HeroSection, ContactContainer, PresentationContainer } from "./styled"


export const Hero = () => {
    return (
        <HeroSection id="hero">
            <PresentationContainer>
                <p>Oi, meu nome é</p>
                <h1>Raul Rita</h1>
                <p>DESENVOLVEDOR WEB FULLSTACK</p>
            </PresentationContainer>
            <ContactContainer>
                <p>Entre em contato:</p>
                <ul>
                    <a href="https://www.linkedin.com/in/raul-rita/" target="_blank" rel="noreferrer">
                        <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="https://github.com/raul-rita" target="_blank" rel="noreferrer">
                        <i class="bi bi-github"></i>
                    </a>
                    <a href="https://wa.me/5516997632363" target="_blank" rel="noreferrer">
                        <i class="bi bi-whatsapp"></i>  
                    </a>
                    <a href="https://drive.google.com/file/d/1BThxMr3eqNfEsj4-4iEppZc1sp37vGzQ/view?usp=drive_link" target="_blank" rel="noreferrer">
                        <i class="bi bi-file-earmark-text"></i>
                    </a>
                </ul>
            </ContactContainer>
        </HeroSection>
    )
}