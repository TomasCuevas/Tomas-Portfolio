import { motion, Variants } from "framer-motion";

//* animation variants *//
const divAnimation: Variants = {
  offscreen: {
    opacity: 0,
    y: -20,
    transition: { delay: 0.1, duration: 0.5 },
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.1, duration: 0.5 },
  },
};

interface Props {
  children: React.ReactNode;
}

export const SkillsFeedHoc: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial="offscreen"
      animate="onscreen"
      variants={divAnimation}
      className="grid w-full grid-cols-3 gap-4"
    >
      {children}
    </motion.div>
  );
};
