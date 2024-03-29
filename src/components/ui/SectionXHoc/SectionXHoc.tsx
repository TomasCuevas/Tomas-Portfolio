import { motion } from "framer-motion";

//* ANIMATION VARIANTS *//
import { sectionVariants } from "./sectionXHoc.animations";

//* INTERFACE *//
interface Props {
  children: React.ReactNode;
  id: string;
}

export const SectionXHoc: React.FC<Props> = ({ children, id }) => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      variants={sectionVariants}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 1 }}
      id={id}
      className="flex min-h-[calc(100vh_-_80px)] w-full max-w-[1000px] flex-col px-4 py-20 pt-24 xs:px-10 md:px-16 md:pt-40 lg:px-8 xl:px-0"
    >
      {children}
    </motion.section>
  );
};
