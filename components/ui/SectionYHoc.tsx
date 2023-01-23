import { motion, Variants } from "framer-motion";

//* animation variants *//
const sectionAnimation: Variants = {
  offscreen: { opacity: 0, y: -100 },
  onscreen: { opacity: 1, y: 0 },
};

interface Props {
  children: React.ReactNode;
}

export const SectionYHoc: React.FC<Props> = ({ children }) => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      variants={sectionAnimation}
      transition={{ duration: 1.5 }}
      viewport={{ once: false, amount: 0.3 }}
      className="flex min-h-[calc(100vh_-_66px)] max-w-[1000px] flex-col px-4 py-[66px] pt-32 xs:px-10 md:min-h-[calc(100vh_-_80px)] md:py-20 md:px-16 md:pt-36 lg:px-8 xl:px-0"
    >
      {children}
    </motion.section>
  );
};
