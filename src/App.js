import "./App.css";
import NavBar from "./components/NavBar";
import AboutUs from "./screens/AboutUs";
import HeroSection from "./screens/HeroSection";
import { ParallaxProvider } from "react-scroll-parallax";
import Services from "./screens/Services";

function App() {
  return (
    <ParallaxProvider>
      <NavBar />
      <HeroSection />
      <AboutUs />
      <Services />
    </ParallaxProvider>
  );
}

export default App;
