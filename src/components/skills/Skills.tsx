import { FC, Ref } from "react";

const Skills: FC<{ ref: Ref<HTMLElement> }> = ({ ref }) => {
  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container-custom"></div>
    </section>
  );
};

export default Skills;
