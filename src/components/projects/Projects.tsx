import { FC, Ref } from "react";

const Projects: FC<{ ref: Ref<HTMLElement> }> = ({ ref }) => {
  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container-custom"></div>
    </section>
  );
};

export default Projects;
