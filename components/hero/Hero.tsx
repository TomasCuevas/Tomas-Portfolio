import NextLink from "next/link";
import { motion, Variants } from "framer-motion";

//* icons *//
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

//* components *//
import { SectionTitle } from "../ui";

//* animation variants *//
const sectionAnimation: Variants = {
  offscreen: { opacity: 0, y: -100 },
  onscreen: { opacity: 1, y: 0 },
};

const resAnimation: Variants = {
  offscreen: { opacity: 0 },
  onscreen: { opacity: 1, transition: { delay: 0.6, duration: 1 } },
};

export const Hero: React.FC = () => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      variants={sectionAnimation}
      transition={{ duration: 1.5 }}
      viewport={{ once: false, amount: 0.3 }}
      className="flex min-h-[calc(100vh_-_80px)] max-w-[1000px] flex-col px-4 py-20 pt-40 xs:px-10 md:px-16 lg:px-8 xl:px-0"
    >
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
          variants={resAnimation}
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
          variants={resAnimation}
          className="max-w-[500px] text-lg font-light tracking-[1px] text-white md:text-xl"
        >
          Soy un desarrollador frontend especializado en el ecosistema de
          ReactJs. Evolucionando día con día para crear las mejores experiencias
          para el usuario más demandante.
        </motion.p>
      </div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
        variants={resAnimation}
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
    </motion.section>
  );
};
