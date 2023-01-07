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
      className="fixed top-0 left-0 z-20 flex h-20 w-full justify-between bg-dark/20 px-4 shadow-2xl shadow-purple/20 backdrop-blur-lg xs:px-10 lg:px-14 xl:px-24"
    >
      <a href="#top">
        <img
          src="/t-logo.png"
          alt="logo"
          className="h-full opacity-80 transition-all duration-300 hover:opacity-100"
        />
      </a>
      <button type="button" className="md:hidden">
        <MdMenu
          onClick={toggleSidebar}
          className="relative z-50 h-10 w-10 text-purple/80 transition-all duration-300 hover:text-purple"
        />
      </button>
      <ul className="hidden items-center gap-8 md:flex">
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
        <li className="rounded-md border border-light/60 px-3 py-1 text-light/60 transition-all duration-300 hover:border-light hover:text-light">
          <a href="#contact" className="text-xl font-light tracking-[1px]">
            Contacto
          </a>
        </li>
      </ul>
    </motion.header>
  );
};
