import { FC, Ref } from "react";

const Home: FC<{ ref: Ref<HTMLElement> }> = ({ ref }) => {
  return (
    <section id="home" className="section hero__section" ref={ref}>
      <div className="container-custom"></div>
    </section>
  );
};

export default Home;
