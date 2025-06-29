
import AboutMeMain from "./Components/AboutMeSection/AboutMeMain";
import HeroGradient from "./Components/heroSections/HeroGradient";
import HeroMain from "./Components/heroSections/HeroMain";
import SubHeroSections from "./Components/heroSections/SubHeroSections";
import NavbarMain from "./Components/navbar/NavbarMain";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient/>
      <SubHeroSections/>
      <AboutMeMain/>
    </main>
  );
}

export default App;
