import { motion, Variants } from "framer-motion";

//* components *//
import { SectionTitle, SectionXHoc } from "@/components/ui";

//* animation variants *//
const textAnimation: Variants = {
  offscreen: {
    opacity: 0,
    y: -20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.7,
      delay: 0.2,
    },
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.7,
      delay: 0.2,
    },
  },
};

//* tailwind-classes *//
const pClass =
  "text-lg font-extralight tracking-[1px] text-white sm:text-xl lg:text-2xl";

export const About: React.FC = () => {
  return (
    <SectionXHoc id="about_me">
      <SectionTitle title="Acerca de mi" />
      <div className="flex flex-col gap-3 xs:gap-4 md:gap-6">
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={textAnimation}
          viewport={{ once: false, amount: 0.5 }}
          className={pClass}
        >
          22 años de edad, apasionado por el mundo del software desde muy
          pequeño. Comencé en esta área desarrollando pequeños scripts para que
          mis modelos 3D tuvieran funcionalidad en un motor gráfico de
          videojuegos. Desde esos momentos, hasta el día de hoy, no he parado de
          aprender y seguir evolucionando como desarrollador.
        </motion.p>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={textAnimation}
          viewport={{ once: false, amount: 0.5 }}
          className={pClass}
        >
          Me apasiona desarrollar proyectos ambiciosos, en los que pueda aplicar
          todos mis conocimientos y adquirir nuevos, porque, si hay algo que me
          caracteriza, es jamás dejar de aprender y muy pocas veces estar
          conforme con lo desarrollado.
        </motion.p>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={textAnimation}
          viewport={{ once: false, amount: 0.5 }}
          className={pClass}
        >
          He desarrollado varios proyectos que he hecho público y otros que
          jamás vieron la luz, de todos ellos, he aprendido, he mejorado y he
          sacado conclusiones que me permitieron desarrollarme como profesional
          y como persona.
        </motion.p>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={textAnimation}
          viewport={{ once: false, amount: 0.5 }}
          className={pClass}
        >
          En varios de mis proyectos personales, he sentido que no era capaz de
          sacarlos adelante, pero eso mismo, me enseñó a no rendirme, a entender
          que si hay algo que no soy capaz de hacer, es una oportunidad para
          aprender algo nuevo, algo a lo que no debo temerle, simplemente, es
          otro obstáculo más en el camino.
        </motion.p>
      </div>
    </SectionXHoc>
  );
};
