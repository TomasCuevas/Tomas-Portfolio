import { useContext } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

//* icons *//
import { MdClose } from "react-icons/md";

//* context *//
import { UIContext } from "../../context";

//* animation variants *//
const asideAnimation: Variants = {
  offscreen: { opacity: 0 },
  onscreen: { opacity: 1, transition: { duration: 0.3 } },
};

const contactAnimation: Variants = {
  offscreen: { opacity: 0, y: -10 },
  onscreen: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
};

const textAnimation: Variants = {
  offscreen: { opacity: 0, y: 20 },
  onscreen: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
};

const borderAnimation: Variants = {
  offscreen: { opacity: 0, x: -100 },
  onscreen: { opacity: 1, x: 0 },
};

export const Sidebar = () => {
  const { toggleSidebar } = useContext(UIContext);

  return (
    <AnimatePresence>
      <motion.aside
        initial="offscreen"
        animate="onscreen"
        variants={asideAnimation}
        className="fixed top-0 left-0 z-50 h-screen w-screen bg-dark/80 backdrop-blur-xl md:hidden"
      >
        <div className="mb-8 flex h-20 items-center justify-end p-4">
          <button type="button">
            <MdClose
              onClick={toggleSidebar}
              className="relative z-50 h-10 w-10 text-purple"
            />
          </button>
        </div>
        <section className="w-full">
          <ul className="flwex-col flex items-center gap-6 px-4 xs:px-10">
            <motion.li
              initial="offscreen"
              animate="onscreen"
              variants={contactAnimation}
              onClick={toggleSidebar}
              className="w-full rounded-md border border-light py-2 text-center text-2xl text-light"
            >
              <a href="#contact">Contacto</a>
            </motion.li>
            <li onClick={toggleSidebar} className="w-full text-2xl text-white">
              <motion.a
                initial="offscreen"
                animate="onscreen"
                variants={textAnimation}
                href="#top"
                className="flex w-full pb-2 text-light/60"
              >
                Inicio
              </motion.a>
              <motion.div
                initial="offscreen"
                animate="onscreen"
                variants={borderAnimation}
                className="h-[1px] w-full bg-purple"
              ></motion.div>
            </li>
            <li onClick={toggleSidebar} className="w-full  text-2xl text-white">
              <motion.a
                initial="offscreen"
                animate="onscreen"
                variants={textAnimation}
                href="#about_me"
                className="flex w-full pb-2 text-light/60"
              >
                Acerca de
              </motion.a>
              <motion.div
                initial="offscreen"
                animate="onscreen"
                variants={borderAnimation}
                className="h-[1px] w-full bg-purple"
              ></motion.div>
            </li>
            <li
              onClick={toggleSidebar}
              className="w-full border-b border-purple text-2xl text-white"
            >
              <motion.a
                initial="offscreen"
                animate="onscreen"
                variants={textAnimation}
                href="#projects"
                className="flex w-full pb-2 text-light/60"
              >
                Proyectos
              </motion.a>
              <motion.div
                initial="offscreen"
                animate="onscreen"
                variants={borderAnimation}
                className="h-[1px] w-full bg-purple"
              ></motion.div>
            </li>
          </ul>
        </section>
      </motion.aside>
    </AnimatePresence>
  );
};
