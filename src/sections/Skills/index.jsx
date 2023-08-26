import JavascriptIcon from "../../components/Icons/technologies/JavascriptIcon"
import { SkillsContainer } from "./styled"
import profile from "../../data/profile.js"
import Title from "../../components/Title"
import SkillCard from "../../components/SkillCard"

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <Title>
        <h1>Habilidades</h1>
        <p>As ferramentas e tecnologias que domino</p>
      </Title>

      <ul>
        <SkillCard>
          <JavascriptIcon />
          <p>{profile.skills.name}</p>
        </SkillCard>
        <SkillCard>
          <JavascriptIcon />
          <p>{profile.skills.name}</p>
        </SkillCard>
        <SkillCard>
          <JavascriptIcon />
          <p>{profile.skills.name}</p>
        </SkillCard>
        <SkillCard>
          <JavascriptIcon />
          <p>{profile.skills.name}</p>
        </SkillCard>        
        <SkillCard>
          <JavascriptIcon />
          <p>{profile.skills.name}</p>
        </SkillCard>        
        <SkillCard>
          <JavascriptIcon />
          <p>{profile.skills.name}</p>
        </SkillCard>        
        <SkillCard>
          <JavascriptIcon />
          <p>{profile.skills.name}</p>
        </SkillCard>        
        <SkillCard>
          <JavascriptIcon />
          <p>{profile.skills.name}</p>
        </SkillCard>        
        <SkillCard>
          <JavascriptIcon />
          <p>{profile.skills.name}</p>
        </SkillCard>        
      </ul>
    </SkillsContainer>
  )
}

export default Skills