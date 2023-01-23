import NextLink from "next/link";
import { motion, Variants } from "framer-motion";

//* icons *//
import { TbLocation, TbBrandGithub } from "react-icons/tb";

//* interfaces *//
import { IProject } from "../../interfaces/Project";

interface Props {
  project: IProject;
}

//* animation variants *//
const articleAnimation: Variants = {
  offscreen: { opacity: 0, x: -150 },
  onscreen: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

const imageAnimation: Variants = {
  offscreen: { opacity: 0.1 },
  onscreen: { opacity: 0.8 },
};

const titleAnimation: Variants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { opacity: 1, y: 0 },
};

const descriptionAnimation: Variants = {
  offscreen: {
    opacity: 0,
    y: -20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const ProjectCardExpanded: React.FC<Props> = ({ project }) => {
  return (
    <motion.article
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
      variants={articleAnimation}
      className="group relative flex min-h-[370px] w-full overflow-hidden rounded-md"
    >
      <div className="absolute top-0 left-0 flex h-auto w-[60%] max-w-[580px] overflow-visible rounded-md bg-purple/50">
        <motion.img
          initial="offscreen"
          variants={imageAnimation}
          viewport={{ once: false, amount: 0.9 }}
          whileInView="onscreen"
          src={project.cover}
          alt="Project cover"
          className="h-auto w-full rounded-md object-cover opacity-20 shadow-lg transition-all duration-300 group-hover:opacity-60"
        />
      </div>
      <div className="z-10 ml-auto flex w-[50%] flex-col items-end justify-center gap-4">
        <motion.h3
          initial="offscreen"
          whileInView="onscreen"
          variants={titleAnimation}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.3, delay: 0.5 }}
          className="text-5xl font-light text-white"
        >
          {project.name}
        </motion.h3>
        <div className="rounded-md bg-white shadow-xl shadow-purple/20 group-hover:shadow-purple/30">
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={descriptionAnimation}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-wrap gap-[3px] px-8 py-4 text-lg font-light leading-8 text-purple "
          >
            {project.description}
          </motion.p>
        </div>
        <div className="flex flex-wrap justify-end gap-4">
          {project.technologies.map((technologie) => (
            <span
              key={technologie}
              className="text-base font-thin tracking-[1px] text-light"
            >
              {technologie}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-end gap-5">
          {project.link ? (
            <NextLink href={project.link} target="_blank">
              <TbLocation className="text-2xl text-white" />
            </NextLink>
          ) : null}
          <NextLink href={project.repository} target="_blank">
            <TbBrandGithub className="text-2xl text-white" />
          </NextLink>
        </div>
      </div>
    </motion.article>
  );
};
