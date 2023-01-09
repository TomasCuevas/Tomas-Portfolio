import { useContext } from "react";
import NextLink from "next/link";
import { motion, Variants } from "framer-motion";

//* icons *//
import { TbLocation, TbBrandGithub } from "react-icons/tb";

//* context *//
import { UIContext } from "../../context";

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

const imageAnimationMobile: Variants = {
  offscreen: { opacity: 0.02 },
  onscreen: { opacity: 0.15 },
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

export const Project: React.FC<Props> = ({ project }) => {
  const { isMobile } = useContext(UIContext);

  return (
    <motion.article
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
      variants={articleAnimation}
      className="group relative flex w-full overflow-hidden rounded-md px-6 py-8 shadow-md shadow-light/20 sm:px-10 sm:py-12 md:min-h-[370px] md:rounded-none md:py-0 md:px-0 md:shadow-none"
    >
      <div className="absolute top-0 left-0 flex h-full w-full overflow-hidden rounded-md bg-purple/20 md:top-[10%] md:h-auto md:w-[60%] md:max-w-[580px] md:overflow-visible md:bg-purple/50 lg:top-0 lg:bottom-0">
        <motion.img
          initial="offscreen"
          variants={isMobile ? imageAnimationMobile : imageAnimation}
          viewport={{ once: false, amount: 0.9 }}
          whileInView="onscreen"
          src={project.cover}
          alt="Project cover"
          className="h-full w-full rounded-md object-cover opacity-10 transition-all duration-300 md:h-auto md:opacity-20 md:shadow-lg md:group-hover:opacity-60"
        />
      </div>
      <div className="z-10 ml-auto flex flex-col justify-center gap-4 md:w-[50%] md:items-end">
        <motion.h3
          initial="offscreen"
          whileInView="onscreen"
          variants={titleAnimation}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.3, delay: 0.5 }}
          className="text-4xl font-light text-light md:text-white lg:text-5xl"
        >
          {project.name}
        </motion.h3>
        <div className="md:rounded-md md:bg-white md:shadow-xl md:shadow-purple/20 md:group-hover:shadow-purple/30">
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={descriptionAnimation}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-wrap gap-[3px] font-light leading-7 text-white xs:text-lg md:px-8 md:py-4 md:leading-8 md:text-purple "
          >
            {project.description}
          </motion.p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end md:gap-4">
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
