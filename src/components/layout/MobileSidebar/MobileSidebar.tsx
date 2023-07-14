import { useContext } from "react";
import { motion } from "framer-motion";

//* ICONS *//
import { MdClose } from "react-icons/md";

//* COMPONENTS *//
import { ThemeSwitch } from "@/components";

//* CONTEXT *//
import { UIContext } from "@/context";

//* ANIMATION VARIANTS *//
import {
  asideVariants,
  borderVariants,
  contactVariants,
  textVariants,
} from "./mobileSidebar.animations";

export const MobileSidebar: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(UIContext);

  const navigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView();
  };

  if (!isSidebarOpen) return <></>;

  return (
    <motion.aside
      initial="offscreen"
      animate="onscreen"
      variants={asideVariants}
      className="fixed top-0 left-0 z-50 h-screen w-screen bg-slate-300 dark:bg-dark/80 backdrop-blur-xl lg:hidden"
    >
      <div className="mb-2 flex h-20 items-center justify-end p-4 xs:px-10 sm:px-32 gap-3">
        <ThemeSwitch />
        <button type="button">
          <MdClose
            onClick={toggleSidebar}
            className="relative z-50 h-10 w-10 text-purple/80 transition-all hover:text-purple"
          />
        </button>
      </div>
      <section className="w-full">
        <ul className="flex flex-col items-center gap-8 px-4 xs:px-10 sm:px-32">
          <motion.li
            initial="offscreen"
            animate="onscreen"
            variants={contactVariants}
            onClick={toggleSidebar}
            className="w-full rounded-md border border-gray-700 text-gray-700 hover:border-gray-900 hover:text-gray-900 dark:border-light/80 text-center text-xl dark:text-light/80 transition-all dark:hover:border-light dark:hover:text-light"
          >
            <button onClick={() => navigate("contact")}>
              <span className="block h-full w-full py-2 text-center">
                Contacto
              </span>
            </button>
          </motion.li>
          <li onClick={toggleSidebar} className="w-full text-xl">
            <button onClick={() => navigate("hero")}>
              <motion.span
                initial="offscreen"
                animate="onscreen"
                variants={textVariants}
                className="flex w-full pb-1 text-gray-500 hover:text-gray-900 dark:text-light/60 transition-all dark:hover:text-light"
              >
                Inicio
              </motion.span>
            </button>
            <motion.div
              initial="offscreen"
              animate="onscreen"
              variants={borderVariants}
              className="h-[1px] w-full bg-purple"
            />
          </li>
          <li onClick={toggleSidebar} className="w-full text-xl">
            <button onClick={() => navigate("about_me")}>
              <motion.span
                initial="offscreen"
                animate="onscreen"
                variants={textVariants}
                className="flex w-full pb-1 text-gray-500 hover:text-gray-900 dark:text-light/60 transition-all dark:hover:text-light"
              >
                Acerca de
              </motion.span>
            </button>
            <motion.div
              initial="offscreen"
              animate="onscreen"
              variants={borderVariants}
              className="h-[1px] w-full bg-purple"
            />
          </li>
          <li onClick={toggleSidebar} className="w-full text-xl">
            <button onClick={() => navigate("projects")}>
              <motion.span
                initial="offscreen"
                animate="onscreen"
                variants={textVariants}
                className="flex w-full pb-1 text-gray-500 hover:text-gray-900 dark:text-light/60 transition-all dark:hover:text-light"
              >
                Proyectos
              </motion.span>
            </button>
            <motion.div
              initial="offscreen"
              animate="onscreen"
              variants={borderVariants}
              className="h-[1px] w-full bg-purple"
            />
          </li>
          <li onClick={toggleSidebar} className="w-full text-xl">
            <button onClick={() => navigate("skills")}>
              <motion.span
                initial="offscreen"
                animate="onscreen"
                variants={textVariants}
                className="flex w-full pb-1 text-gray-500 hover:text-gray-900 dark:text-light/60 transition-all dark:hover:text-light"
              >
                Habilidades
              </motion.span>
            </button>
            <motion.div
              initial="offscreen"
              animate="onscreen"
              variants={borderVariants}
              className="h-[1px] w-full bg-purple"
            />
          </li>
        </ul>
      </section>
    </motion.aside>
  );
};
