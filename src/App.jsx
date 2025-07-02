import AboutMeMain from "./Components/AboutMeSection/AboutMeMain";
import ExperienceMain from "./Components/ExperienceSection/ExperienceMain";
import HealperSection from "./Components/HealperSection";
import HeroGradient from "./Components/heroSections/HeroGradient";
import HeroMain from "./Components/heroSections/HeroMain";
import SubHeroSections from "./Components/heroSections/SubHeroSections";
import NavbarMain from "./Components/navbar/NavbarMain";
import SkillsMain from "./Components/SkillsSection/SkillsMain";
import SubSkills from "./Components/SkillsSection/SubSkills";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSections />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills/>
      <ExperienceMain/>
      <HealperSection />
    </main>
  );
}

export default App;
