import { motion, Variants } from "framer-motion";

//* data *//
import projects from "../../data/projects.json";

//* components *//
import { Project } from "./";

//* context *//

//* animation variants *//
const sectionAnimation: Variants = {
  offscreen: { opacity: 0, x: -100 },
  onscreen: { opacity: 1, x: 0 },
};

const borderAnimation: Variants = {
  offscreen: { opacity: 0, x: -200 },
  onscreen: { opacity: 1, x: 0 },
};

export const Projects: React.FC = () => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionAnimation}
      id="projects"
      className="flex min-h-[calc(100vh_-_80px)] max-w-[1000px] flex-col px-4 py-20 xs:px-10 md:px-16 lg:px-8 xl:px-0"
    >
      <div className="mb-4">
        <h2 className="text-5xl tracking-[1px] text-light xs:text-6xl">
          Proyectos
        </h2>
      </div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={borderAnimation}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mb-4 h-[2px] w-full bg-light"
      ></motion.div>
      <div className="flex w-full flex-col gap-6 xs:gap-8 md:gap-20 lg:gap-32">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </motion.section>
  );
};
