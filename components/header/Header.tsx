import { useContext } from "react";
import { motion, Variants } from "framer-motion";

//* icons *//
import { MdMenu } from "react-icons/md";

//* context *//
import { UIContext } from "../../context";

const headerAnimation: Variants = {
  offscreen: { opacity: 0 },
  onscreen: { opacity: 1 },
};

export const Header: React.FC = () => {
  const { toggleSidebar } = useContext(UIContext);

  return (
    <motion.header
      initial="offscreen"
      whileInView="onscreen"
      variants={headerAnimation}
      viewport={{ amount: 0.1, once: true }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed top-0 left-0 z-20 flex h-[66px] w-full items-end justify-center bg-[#0000] px-4 backdrop-blur-sm xs:px-10 md:h-20 md:px-16 lg:px-8 xl:px-0"
    >
      <div className="flex h-14 w-full max-w-[1000px] items-center justify-between rounded-full bg-darkLight/90 px-4 backdrop-blur-sm md:h-[66px] md:px-8">
        <a href="#top" className="h-full w-[95px]">
          <img
            src="/t-logo.png"
            alt="logo"
            className="h-full opacity-80 transition-all duration-300 hover:opacity-100"
          />
        </a>
        <button type="button" className="md:hidden">
          <MdMenu
            onClick={toggleSidebar}
            className="relative z-50 h-10 w-10 text-purple transition-all duration-300"
          />
        </button>
        <ul className="hidden h-full items-center gap-5 md:flex lg:gap-7">
          <li>
            <a
              href="#top"
              className="text-xl font-light tracking-[1px] text-light/60 transition-all duration-300 hover:text-light"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#about_me"
              className="text-xl font-light tracking-[1px] text-light/60 transition-all duration-300 hover:text-light"
            >
              Acerca de
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-xl font-light tracking-[1px] text-light/60 transition-all duration-300 hover:text-light"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-xl font-light tracking-[1px] text-light/60 transition-all duration-300 hover:text-light"
            >
              Habilidades
            </a>
          </li>
        </ul>
        <div className="hidden items-center rounded-md border border-light/60 text-light/60 transition-all duration-300 hover:border-light hover:text-light md:flex">
          <a
            href="#contact"
            className="py-1 px-3 text-xl font-light tracking-[1px]"
          >
            Contacto
          </a>
        </div>
      </div>
    </motion.header>
  );
};
