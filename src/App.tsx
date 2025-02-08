import { FC } from "react";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

import "./index.css";

const sections: { Component: FC }[] = [
  { Component: Home },
  { Component: About },
  { Component: Skills },
  { Component: Projects },
] as const;

const App = () => {
  return (
    <div className="app">
      <Navbar />
      {sections.map(({ Component }, index) => (
        <Component key={index} />
      ))}
    </div>
  );
};

export default App;
