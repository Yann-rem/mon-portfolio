import { FC, Ref } from "react";

const About: FC<{ ref: Ref<HTMLElement> }> = ({ ref }) => {
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container-custom"></div>
    </section>
  );
};

export default About;
