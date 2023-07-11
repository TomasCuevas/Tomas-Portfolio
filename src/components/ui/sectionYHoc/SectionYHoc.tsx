import { motion } from "framer-motion";

//* animation variants *//
import { sectionAnimation } from "./sectionYHoc.animations";

//* interface *//
interface Props {
  children: React.ReactNode;
  id: string;
}

export const SectionYHoc: React.FC<Props> = ({ children, id }) => {
  return (
    <motion.section
      id={id}
      initial="offscreen"
      whileInView="onscreen"
      variants={sectionAnimation}
      transition={{ duration: 1.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex min-h-[calc(100vh_-_66px)] max-w-[1000px] flex-col px-4 py-[90px] xs:px-10 sm:pt-32 md:min-h-[calc(100vh_-_80px)] md:py-20 md:px-16 md:pt-36 lg:px-8 xl:px-0"
    >
      {children}
    </motion.section>
  );
};
