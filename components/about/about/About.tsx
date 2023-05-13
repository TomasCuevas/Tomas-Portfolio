import { motion } from "framer-motion";

//* components *//
import { SectionTitle, SectionXHoc } from "@/components/ui";
import { AboutParagraph } from "../";

export const About: React.FC = () => {
  return (
    <SectionXHoc id="about_me">
      <SectionTitle title="Acerca de mí" />
      <div className="flex flex-col gap-3 xs:gap-4 md:gap-6">
        <AboutParagraph
          paragraph="Desde muy temprana edad, me he sentido apasionado por el mundo del
      software. Mi primer acercamiento fue desarrollando pequeños scripts para
      darle funcionalidad a mis modelos 3D en un motor gráfico de videojuegos.
      Desde entonces, no he dejado de aprender y evolucionar como desarrollador."
        />
        <AboutParagraph
          paragraph="Siento una gran pasión por el desarrollo de proyectos ambiciosos, en
          los que pueda aplicar mis conocimientos y adquirir nuevos, ya que
          siempre estoy en busca de mejorar y superarme. Soy una persona que
          nunca se conforma con lo desarrollado y siempre busca dar lo mejor de
          sí."
        />
        <AboutParagraph
          paragraph="He desarrollado varios proyectos personales, algunos de los cuales he
          compartido con la comunidad. De cada uno de ellos he aprendido,
          mejorado y sacado valiosas conclusiones que me han permitido crecer
          tanto como profesional como persona."
        />
        <AboutParagraph
          paragraph="En algunos de mis proyectos personales, he enfrentado dificultades y
          momentos de frustración, pero estos obstáculos me han enseñado que
          nunca debo rendirme. Para mí, cada reto es una oportunidad de
          aprendizaje y crecimiento, y estoy dispuesto a enfrentarlos con
          entusiasmo y determinación."
        />
      </div>
    </SectionXHoc>
  );
};
