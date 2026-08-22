import "../styles/index.css";
import { LangProvider } from "./context/LangContext";
import SplashScreen from "./components/SplashScreen";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Works from "./components/Works";
import VideoGallery from "./components/VideoGallery";
import Credentials from "./components/Credentials";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <LangProvider>
      <div className="min-h-screen w-full bg-background" style={{ fontFamily: "'Figtree', sans-serif" }}>
        <SplashScreen />
        <Nav />
        <Hero />
        <Skills />
        <Works />
        <VideoGallery />
        <Credentials />
        <About />
        <Footer />
      </div>
    </LangProvider>
  );
}
