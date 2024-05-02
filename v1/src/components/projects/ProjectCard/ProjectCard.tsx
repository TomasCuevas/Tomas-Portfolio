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
      className="relative flex w-full px-6 py-8 overflow-hidden shadow-md group rounded-2xl shadow-purple/20 sm:p-16 md:px-6 md:py-8"
    >
      <div className="absolute top-0 left-0 flex w-full h-full overflow-hidden bg-gray-900 rounded-2xl">
        <img
          src={project.cover}
          alt="Project cover"
          className="object-cover w-full h-full transition-all duration-300 rounded-md opacity-30 group-hover:scale-110"
        />
      </div>
      <div className="z-10 flex flex-col justify-center gap-4 ml-auto">
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
