import { motion, Variants } from "framer-motion";

//* components *//
import { SectionTitle } from "../ui";

//* animation variants *//
const sectionAnimation: Variants = {
  offscreen: { opacity: 0, x: -100 },
  onscreen: { opacity: 1, x: 0 },
};

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

export const About: React.FC = () => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      variants={sectionAnimation}
      transition={{ duration: 1, staggerChildren: 0.2 }}
      viewport={{ once: false, amount: 0.3 }}
      id="about_me"
      className="flex max-w-[1000px] flex-col px-4 py-20 xs:px-10 md:px-16 lg:px-8 xl:px-0"
    >
      <SectionTitle title="Acerca de mi" />
      <div className="flex flex-col gap-3 xs:gap-4 md:gap-6">
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={textAnimation}
          viewport={{ once: false, amount: 0.5 }}
          className="text-lg font-light tracking-[1px] text-white sm:text-xl lg:text-2xl"
        >
          Desde pequeño, apasionado por el mundo de la tecnología, el hardware y
          más adelante, del software.
        </motion.p>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={textAnimation}
          viewport={{ once: false, amount: 0.5 }}
          className="text-lg font-light tracking-[1px] text-white sm:text-xl lg:text-2xl"
        >
          Cuando niño, quise desarrollar mi propio videojuego, por lo que desde
          muy temprano en mi vida, me cruce con el mundo de la programación.
          Haciendo cosas básicas en C# junto al motor grafico (Unity). Desde
          esos momentos, fue que me atrajo el software y la programación, sin
          siquiera, conocer conceptos básicos como variables, funciones,
          objetos, etc.
        </motion.p>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={textAnimation}
          viewport={{ once: false, amount: 0.5 }}
          className="text-lg font-light tracking-[1px] text-white sm:text-xl lg:text-2xl"
        >
          Al pasar los años, pase por C# que lo utilizaba en Unity, programando
          cositas básicas. Más adelante, pase por C++, haciendo ejercicios de
          lógica en aplicaciones de consola, hasta que conocí el mundo del
          desarrollo web, donde comencé a aprender JavaScript, y todo lo demás.
        </motion.p>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={textAnimation}
          viewport={{ once: false, amount: 0.5 }}
          className="text-lg font-light tracking-[1px] text-white sm:text-xl lg:text-2xl"
        >
          Saludos, mi nombre es Tomás Cuevas, y lo anterior, fue una acotada
          ruta de mi vida, en la introducción al mundo del desarrollo de
          software.
        </motion.p>
      </div>
    </motion.section>
  );
};
