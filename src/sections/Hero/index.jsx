import EmailIcon from "../../components/Icons/contact/EmailIcon"
import GithubIcon from "../../components/Icons/contact/GithubIcon"
import LinkedinIcon from "../../components/Icons/contact/LinkedinIcon"
import WhatsappIcon from "../../components/Icons/contact/WhatsappIcon"
import { HeroSection, ContactContainer, PresentationContainer } from "./styled"

export default function Hero() {
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
                        <LinkedinIcon />
                    </a>
                    <a href="https://github.com/raul-rita" target="_blank" rel="noreferrer">
                        <GithubIcon />
                    </a>
                    <a href="https://wa.me/5516997632363" target="_blank" rel="noreferrer">
                        <WhatsappIcon />
                    </a>
                    <a href="mailto:raul.vinicius@live.com" target="_blank" rel="noreferrer">
                        <EmailIcon />
                    </a>
                </ul>
            </ContactContainer>
        </HeroSection>
    )
}
