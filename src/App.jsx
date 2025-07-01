import AboutMeMain from "./Components/AboutMeSection/AboutMeMain";
import HealperSection from "./Components/HealperSection";
import HeroGradient from "./Components/heroSections/HeroGradient";
import HeroMain from "./Components/heroSections/HeroMain";
import SubHeroSections from "./Components/heroSections/SubHeroSections";
import NavbarMain from "./Components/navbar/NavbarMain";
import SkillsMain from "./Components/SkillsSection/SkillsMain";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSections />
      <AboutMeMain />
      <SkillsMain />
      <HealperSection />
    </main>
  );
}

export default App;
