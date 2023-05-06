import NextLink from "next/link";
import { motion, Variants } from "framer-motion";

//* icons *//
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { RiEyeFill } from "react-icons/ri";

//* components *//
import { SectionTitle, SectionYHoc } from "@/components/ui";

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
        className="my-4 flex items-center gap-4"
      >
        <NextLink
          href="https://www.linkedin.com/in/tom%C3%A1s-cuevas-dev/"
          target="_blank"
        >
          <FaLinkedin className="cursor-pointer text-4xl text-white/70 transition-all duration-300 hover:text-white" />
        </NextLink>
        <NextLink href="https://github.com/TomasCuevas" target="_blank">
          <FaGithubSquare className="cursor-pointer text-4xl text-white/70 transition-all duration-300 hover:text-white" />
        </NextLink>
        <button className="items-center rounded-md border border-light/60 text-light/60 transition-all duration-300 hover:border-light hover:text-light">
          <a
            target="_blank"
            href="/assets/Tomás_Cuevas_Curriculum_FullStack.pdf"
            className="flex items-center gap-2 py-1 px-3 text-lg font-light tracking-[1px]"
          >
            <span>Ver CV</span>
            <RiEyeFill />
          </a>
        </button>
      </motion.div>
    </SectionYHoc>
  );
};
