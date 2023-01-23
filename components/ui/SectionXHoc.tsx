import { motion, Variants } from "framer-motion";

//* animation variants *//
const sectionAnimation: Variants = {
  offscreen: { opacity: 0, x: -100 },
  onscreen: { opacity: 1, x: 0 },
};

//* interface *//
interface Props {
  children: React.ReactNode;
  id: string;
}

export const SectionXHoc: React.FC<Props> = ({ children, id }) => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionAnimation}
      id={id}
      className="flex min-h-[calc(100vh_-_80px)] w-full max-w-[1000px] flex-col px-4 py-20 pt-24 xs:px-10 md:px-16 md:pt-40 lg:px-8 xl:px-0"
    >
      {children}
    </motion.section>
  );
};
