import Link from "next/link";
import { motion } from "framer-motion";

//* ICONS *//
import { TbLocation, TbBrandGithub } from "react-icons/tb";

//* ANIMATION VARIANTS *//
import {
  articleVariants,
  descriptionVariants,
  imageVariants,
  titleVariants,
} from "./projectCardExpanded.animations";

//* INTERFACES *//
import { IProject } from "@/interfaces";

interface Props {
  project: IProject;
  reverse?: boolean;
}

export const ProjectCardExpanded: React.FC<Props> = ({
  project,
  reverse = false,
}) => {
  return (
    <motion.article
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      variants={articleVariants}
      className="group relative flex min-h-[370px] w-full overflow-hidden rounded-md"
    >
      <div
        className={`absolute top-5 ${
          reverse ? "left-0" : "right-0"
        } flex h-auto w-[60%] max-w-[580px] overflow-visible rounded-md bg-purple/50`}
      >
        <motion.img
          initial="offscreen"
          variants={imageVariants}
          viewport={{ once: false, amount: 0.9 }}
          whileInView="onscreen"
          src={project.cover}
          alt="Project cover"
          className="h-auto w-full rounded-md object-cover opacity-20 shadow-lg transition-all duration-300 group-hover:opacity-60"
        />
      </div>
      <div
        className={`z-10 flex w-[50%] flex-col ${
          reverse ? "items-end ml-auto" : "items-start"
        } justify-center gap-4`}
      >
        <motion.h3
          initial="offscreen"
          whileInView="onscreen"
          variants={titleVariants}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.3, delay: 0.2 }}
          className="text-5xl font-light text-gray-800 dark:text-white"
        >
          {project.name}
        </motion.h3>
        <div className="rounded-md bg-white/90 text-dark shadow-md shadow-purple/20 group-hover:shadow-purple/30">
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={descriptionVariants}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-wrap gap-[3px] px-8 py-4 text-lg font-light leading-8 text-purple "
          >
            {project.description}
          </motion.p>
        </div>
        <div
          className={`flex flex-wrap ${
            reverse ? "justify-end" : "justify-start"
          } gap-3 gap-y-2 xl:max-w-[90%]`}
        >
          {project.technologies.map((technologie) => (
            <span
              key={technologie}
              className="rounded-md text-dark bg-gray-300/60 dark:bg-gray-800/20 px-2 py-1 text-sm font-thin tracking-[1px] dark:text-light"
            >
              {technologie}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-end gap-5">
          <Link
            href={project.link || ""}
            target="_blank"
            style={{ display: project.link ? "block" : "none" }}
          >
            <TbLocation className="text-2xl text-dark dark:text-white" />
          </Link>
          <Link href={project.repository} target="_blank">
            <TbBrandGithub className="text-2xl text-dark dark:text-white" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
