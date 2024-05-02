import { useContext } from "react";
import { motion } from "framer-motion";

//* ICONS *//
import { MdMenu } from "react-icons/md";

//* CONTEXT *//
import { UIContext } from "@/context";

//* ANIMATION VARIANTS *//
import { headerVariants } from "./header.animations";

//* COMPONENT *//
import { ThemeSwitch } from "@/components";

export const Header: React.FC = () => {
  const { toggleSidebar } = useContext(UIContext);

  const navigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView();
  };

  return (
    <motion.header
      initial="offscreen"
      whileInView="onscreen"
      variants={headerVariants}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed top-0 left-0 z-20 flex h-[66px] w-full items-end justify-center bg-[#0000] px-4 backdrop-blur-sm xs:px-10 md:h-20 md:px-16 lg:px-8 xl:px-0"
    >
      <div className="flex bg-slate-300 h-14 w-full max-w-[1000px] items-center justify-between rounded-full dark:bg-darkLight px-4 backdrop-blur-sm md:h-[66px] md:px-8">
        <button onClick={() => navigate("hero")} className="h-full w-[95px]">
          <img
            src="/t-logo.png"
            alt="logo"
            className="h-full opacity-80 transition-all duration-300 hover:opacity-100"
          />
        </button>
        <button type="button" className="lg:hidden">
          <MdMenu
            onClick={toggleSidebar}
            className="relative z-50 h-10 w-10 text-purple transition-all duration-300"
          />
        </button>
        <ul className="hidden h-full items-center gap-5 lg:flex lg:gap-7">
          <li>
            <button onClick={() => navigate("hero")}>
              <span className="text-xl font-light tracking-[1px] text-gray-500 hover:text-gray-900 dark:text-light/60 transition-all duration-300 dark:hover:text-light">
                Inicio
              </span>
            </button>
          </li>
          <li>
            <button onClick={() => navigate("about_me")}>
              <span className="text-xl font-light tracking-[1px] text-gray-500 hover:text-gray-900 dark:text-light/60 transition-all duration-300 dark:hover:text-light">
                Acerca de
              </span>
            </button>
          </li>
          <li>
            <button onClick={() => navigate("projects")}>
              <span className="text-xl font-light tracking-[1px] text-gray-500 hover:text-gray-900 dark:text-light/60 transition-all duration-300 dark:hover:text-light">
                Proyectos
              </span>
            </button>
          </li>
          <li>
            <button onClick={() => navigate("skills")}>
              <span className="text-xl font-light tracking-[1px] text-gray-500 hover:text-gray-900 dark:text-light/60 transition-all duration-300 dark:hover:text-light">
                Habilidades
              </span>
            </button>
          </li>
        </ul>
        <div className="gap-2 items-center hidden lg:flex">
          <button
            onClick={() => navigate("contact")}
            className="items-center rounded-md border border-gray-500 text-gray-500 hover:border-gray-900 hover:text-gray-900 dark:text-light/60 transition-all duration-300 dark:border-light/60 dark:hover:border-light dark:hover:text-light flex"
          >
            <span className="py-1 px-3 text-xl font-light tracking-[1px]">
              Contacto
            </span>
          </button>
          <ThemeSwitch />
        </div>
      </div>
    </motion.header>
  );
};
