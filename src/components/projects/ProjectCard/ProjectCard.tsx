import Link from "next/link";
import { motion } from "framer-motion";

//* ICONS *//
import { TbLocation, TbBrandGithub } from "react-icons/tb";

//* ANIMATION VARIANTS *//
import {
  articleVariants,
  descriptionVariants,
  imageMobileVariants,
  titleVariants,
} from "./projectCard.animations";

//* INTERFACES *//
import { IProject } from "@/interfaces";

interface Props {
  project: IProject;
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <motion.article
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      variants={articleVariants}
      className="group relative flex w-full overflow-hidden rounded-2xl px-6 py-8 shadow-md shadow-purple/20 sm:p-16 md:px-6 md:py-8"
    >
      <div className="absolute top-0 left-0 flex h-full w-full overflow-hidden rounded-2xl bg-gray-900">
        <img
          src={project.cover}
          alt="Project cover"
          className="h-full w-full rounded-md object-cover opacity-30 transition-all duration-300 group-hover:scale-110"
        />
      </div>
      <div className="z-10 ml-auto flex flex-col justify-center gap-4">
        <motion.h3
          initial="offscreen"
          whileInView="onscreen"
          variants={titleVariants}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.3, delay: 0.5 }}
          className="text-4xl font-light text-white"
        >
          {project.name}
        </motion.h3>
        <div>
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={descriptionVariants}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-wrap gap-[3px] font-light leading-7 text-white xs:text-lg"
          >
            {project.description}
          </motion.p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technologie) => (
            <span
              key={technologie}
              className="rounded-md bg-gray-700/50 px-2 py-1 text-xs sm:text-sm font-thin tracking-[1px] text-white"
            >
              {technologie}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-end gap-5">
          {project.link ? (
            <Link href={project.link} target="_blank">
              <TbLocation className="text-2xl text-white" />
            </Link>
          ) : null}
          <Link href={project.repository} target="_blank">
            <TbBrandGithub className="text-2xl text-white" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
