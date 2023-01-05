import { NextPage } from "next";

//* components *//
import { About } from "../components/about";
import { Hero } from "../components/hero";
import { Projects } from "../components/projects";
import { Contact } from "../components/Contact";

//* layout *//
import { MainLayout } from "../components/layout";

const Home: NextPage = () => {
  return (
    <MainLayout
      title="Tomás Cuevas | Portfolio"
      description="Pagina principal del portfolio de Tomás Cuevas"
    >
      <Hero />
      <About />
      <Projects />
      <Contact />
    </MainLayout>
  );
};

export default Home;
