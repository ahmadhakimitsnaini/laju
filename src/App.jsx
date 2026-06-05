import React, { Suspense } from "react";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./sections/HeroSection";
import DynamicBackground from "./components/ui/DynamicBackground";
import { MotionProvider } from "./components/ui/Animations";

const OverviewSection = React.lazy(() => import("./sections/OverviewSection"));
const DefineSection = React.lazy(() => import("./sections/DefineSection"));
const IdeateSection = React.lazy(() => import("./sections/IdeateSection"));
const PrototypeSection = React.lazy(() => import("./sections/PrototypeSection"));
const TestSection = React.lazy(() => import("./sections/TestSection"));
const Footer = React.lazy(() => import("./components/layout/Footer"));

export default function App() {
  return (
    <MotionProvider>
      <div
        style={{
          backgroundColor: "transparent",
          minHeight: "100vh",
          color: "#111",
          fontFamily: "'Roobert', sans-serif",
        }}
      >
        <DynamicBackground />
        <Navbar />
        <main>
          <HeroSection />
          <Suspense fallback={<div className="h-32 flex items-center justify-center text-gray-500">Memuat bagian...</div>}>
            <OverviewSection />
            <DefineSection />
            <IdeateSection />
            <PrototypeSection />
            <TestSection />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </MotionProvider>
  );
}
