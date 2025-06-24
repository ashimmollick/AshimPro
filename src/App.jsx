import "./App.css";
import HeroGradient from "./Components/heroSections/HeroGradient";
import HeroMain from "./Components/heroSections/HeroMain";
import NavbarMain from "./Components/navbar/NavbarMain";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient/>
    </main>
  );
}

export default App;
