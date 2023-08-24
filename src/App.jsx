import About from "./components/About";
import { Hero } from "./components/Hero";
import Navigation from "./components/Navigation";
import { PageContainer } from "./components/PageContainer/styled";
import Skills from "./components/Skills";


function App() {
  return (
    <PageContainer>
      <Navigation />
      <Hero />
      <About />
      <Skills />
    </PageContainer>

  );
}

export default App;
