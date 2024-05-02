import { NextPage } from "next";

//* COMPONENTS *//
import { About, Hero, Projects, Skills, Contact } from "@/components";

//* LAYOUT *//
import { MainLayout } from "@/layout";

const Home: NextPage = () => {
  return (
    <MainLayout
      title="Tomás Cuevas | Portfolio"
      description="Pagina principal del portfolio de Tomás Cuevas"
    >
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </MainLayout>
  );
};

export default Home;
  