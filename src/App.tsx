import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AircraftCarousel from "./components/AircraftCarousel";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AircraftCarousel />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
