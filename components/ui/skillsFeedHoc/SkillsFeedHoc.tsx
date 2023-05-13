import { motion } from "framer-motion";

//* interface *//
interface Props {
  children: React.ReactNode;
}

export const SkillsFeedHoc: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="grid w-full grid-cols-3 gap-4"
    >
      {children}
    </motion.div>
  );
};
