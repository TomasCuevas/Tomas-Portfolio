import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

//* icons *//
import { MdClose } from "react-icons/md";

//* context *//
import { UIContext } from "@/context";

//* animation variants *//
import {
  asideAnimation,
  borderAnimation,
  contactAnimation,
  textAnimation,
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
      variants={asideAnimation}
      className="fixed top-0 left-0 z-50 h-screen w-screen bg-dark/80 backdrop-blur-xl md:hidden"
    >
      <div className="mb-2 flex h-20 items-center justify-end p-4 xs:px-10">
        <button type="button">
          <MdClose
            onClick={toggleSidebar}
            className="relative z-50 h-10 w-10 text-purple/80 transition-all duration-300 hover:text-purple"
          />
        </button>
      </div>
      <section className="w-full">
        <ul className="flex flex-col items-center gap-8 px-4 xs:px-10">
          <motion.li
            initial="offscreen"
            animate="onscreen"
            variants={contactAnimation}
            onClick={toggleSidebar}
            className="w-full rounded-md border border-light/80 text-center text-2xl text-light/80 transition-all duration-300 hover:border-light hover:text-light"
          >
            <button onClick={() => navigate("contact")}>
              <span className="block h-full w-full py-2 text-center">
                Contacto
              </span>
            </button>
          </motion.li>
          <li onClick={toggleSidebar} className="w-full text-2xl">
            <button onClick={() => navigate("hero")}>
              <motion.span
                initial="offscreen"
                animate="onscreen"
                variants={textAnimation}
                className="flex w-full pb-2 text-light/60 transition-all duration-300 hover:text-light"
              >
                Inicio
              </motion.span>
            </button>
            <motion.div
              initial="offscreen"
              animate="onscreen"
              variants={borderAnimation}
              className="h-[1px] w-full bg-purple"
            ></motion.div>
          </li>
          <li onClick={toggleSidebar} className="w-full  text-2xl">
            <button onClick={() => navigate("about_me")}>
              <motion.span
                initial="offscreen"
                animate="onscreen"
                variants={textAnimation}
                className="flex w-full pb-2 text-light/60 transition-all duration-300 hover:text-light"
              >
                Acerca de
              </motion.span>
            </button>
            <motion.div
              initial="offscreen"
              animate="onscreen"
              variants={borderAnimation}
              className="h-[1px] w-full bg-purple"
            ></motion.div>
          </li>
          <li
            onClick={toggleSidebar}
            className="w-full border-b border-purple text-2xl"
          >
            <button onClick={() => navigate("projects")}>
              <motion.span
                initial="offscreen"
                animate="onscreen"
                variants={textAnimation}
                className="flex w-full pb-2 text-light/60 transition-all duration-300 hover:text-light"
              >
                Proyectos
              </motion.span>
            </button>
            <motion.div
              initial="offscreen"
              animate="onscreen"
              variants={borderAnimation}
              className="h-[1px] w-full bg-purple"
            ></motion.div>
          </li>
          <li
            onClick={toggleSidebar}
            className="w-full border-b border-purple text-2xl"
          >
            <button onClick={() => navigate("skills")}>
              <motion.span
                initial="offscreen"
                animate="onscreen"
                variants={textAnimation}
                className="flex w-full pb-2 text-light/60 transition-all duration-300 hover:text-light"
              >
                Habilidades
              </motion.span>
              <motion.div
                initial="offscreen"
                animate="onscreen"
                variants={borderAnimation}
                className="h-[1px] w-full bg-purple"
              ></motion.div>
            </button>
          </li>
        </ul>
      </section>
    </motion.aside>
  );
};
