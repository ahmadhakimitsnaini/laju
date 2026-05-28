import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./sections/HeroSection";
import OverviewSection from "./sections/OverviewSection";
import DefineSection from "./sections/DefineSection";
import IdeateSection from "./sections/IdeateSection";
import PrototypeSection from "./sections/PrototypeSection";
import TestSection from "./sections/TestSection";

export default function App() {
  return (
    <div
      style={{
        backgroundColor: "transparent",
        minHeight: "100vh",
        color: "#F3F4F6",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <OverviewSection />
        <DefineSection />
        <IdeateSection />
        <PrototypeSection />
        <TestSection />
      </main>
      <Footer />
    </div>
  );
}
