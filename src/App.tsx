import { FC, Ref, useRef } from "react";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

import "./index.css";

const sections: { Component: FC<{ ref: Ref<HTMLElement> }> }[] = [
  { Component: Home },
  { Component: About },
  { Component: Skills },
  { Component: Projects },
] as const;

const App = () => {
  const sectionsRefs = useRef<(HTMLElement | null)[]>([]);

  return (
    <div className="app">
      <Navbar />
      {sections.map(({ Component }, index) => (
        <Component
          key={index}
          ref={(el) => {
            sectionsRefs.current[index] = el;
          }}
        />
      ))}
    </div>
  );
};

export default App;
