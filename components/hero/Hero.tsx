import NextLink from "next/link";
import { motion, Variants } from "framer-motion";

//* icons *//
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

//* components *//
import { SectionTitle, SectionYHoc } from "../ui";

//* animation variants *//
const textAnimation: Variants = {
  offscreen: { opacity: 0 },
  onscreen: { opacity: 1, transition: { delay: 0.6, duration: 1 } },
};

export const Hero: React.FC = () => {
  return (
    <SectionYHoc>
      <div className="mb-5 flex justify-center">
        <img
          src="/4x4.jpg"
          alt=""
          className="h-[175px] w-[175px] rounded-full object-cover shadow-lg shadow-purple/50 md:h-[200px] md:w-[200px]"
        />
      </div>
      <div>
        <h1 className="text-2xl tracking-[1px] text-purple md:text-3xl">
          Hola, mi nombre es
        </h1>
      </div>
      <SectionTitle title="Anselmo Tomás Cuevas." />
      <div className="mb-8">
        <motion.h3
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 1 }}
          variants={textAnimation}
          className="text-5xl tracking-[1px] text-purple sm:text-6xl"
        >
          Navegando por el mundo del desarrollo web
        </motion.h3>
      </div>
      <div>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 1 }}
          variants={textAnimation}
          className="max-w-[500px] text-lg font-light tracking-[1px] text-white md:text-xl"
        >
          Soy un desarrollador fullstack especializado en el ecosistema de
          JavaScript. Evolucionando día tras día para crear las mejores
          experiencias para el usuario más demandante.
        </motion.p>
      </div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
        variants={textAnimation}
        transition={{ delay: 1 }}
        className="my-4 flex gap-4"
      >
        <NextLink
          href="https://www.linkedin.com/in/tom%C3%A1s-cuevas-dev/"
          target="_blank"
        >
          <FaLinkedin className="cursor-pointer text-3xl text-white/70 transition-all duration-300 hover:text-white" />
        </NextLink>
        <NextLink href="https://github.com/TomasCuevas" target="_blank">
          <FaGithubSquare className="cursor-pointer text-3xl text-white/70 transition-all duration-300 hover:text-white" />
        </NextLink>
      </motion.div>
    </SectionYHoc>
  );
};
