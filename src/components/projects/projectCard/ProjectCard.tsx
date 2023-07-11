import Link from "next/link";
import { motion } from "framer-motion";

//* icons *//
import { TbLocation, TbBrandGithub } from "react-icons/tb";

//* animation variants *//
import {
  articleAnimation,
  descriptionAnimation,
  imageAnimationMobile,
  titleAnimation,
} from "./projectCard.animations";

//* interfaces *//
import { IProject } from "@/interfaces";

interface Props {
  project: IProject;
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <motion.article
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={articleAnimation}
      className="group relative flex w-full overflow-hidden rounded-md px-6 py-8 shadow-md shadow-purple/20 sm:p-16 md:px-6 md:py-8"
    >
      <div className="absolute top-0 left-0 flex h-full w-full overflow-hidden rounded-md bg-purple/10 ">
        <motion.img
          initial="offscreen"
          whileInView="onscreen"
          variants={imageAnimationMobile}
          viewport={{ once: false, amount: 0.9 }}
          src={project.cover}
          alt="Project cover"
          className="h-full w-full rounded-md object-cover opacity-10 transition-all duration-300 group-hover:scale-110"
        />
      </div>
      <div className="z-10 ml-auto flex flex-col justify-center gap-4">
        <motion.h3
          initial="offscreen"
          whileInView="onscreen"
          variants={titleAnimation}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.3, delay: 0.5 }}
          className="text-4xl font-light text-light"
        >
          {project.name}
        </motion.h3>
        <div>
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={descriptionAnimation}
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
              className="rounded-md bg-purple/50 px-2 py-1 text-base font-thin tracking-[1px] text-light"
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
