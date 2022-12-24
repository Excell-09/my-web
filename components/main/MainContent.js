import HomeSection from "../home/HomeSection";
import Skills from "../skills/SkillSection";
import ProjectSection from "../project/ProjectSection";
import Contact from "../ContactSection/contact";

const MainContent = () => {
  return (
    <main>
      <HomeSection />
      <Skills />
      <ProjectSection/>
      <Contact />
    </main>
  );
};

export default MainContent;
