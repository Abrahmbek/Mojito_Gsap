import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
