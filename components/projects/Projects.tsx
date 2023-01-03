import { motion, Variants } from "framer-motion";

//* components *//
import { SectionTitle } from "../ui";

//* data *//
import projects from "../../data/projects.json";

//* components *//
import { Project } from "./";

//* animation variants *//
const sectionAnimation: Variants = {
  offscreen: { opacity: 0, x: -100 },
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
      <SectionTitle title="Projectos" />
      <div className="flex w-full flex-col gap-6 xs:gap-8 md:gap-20 lg:gap-32">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </motion.section>
  );
};
