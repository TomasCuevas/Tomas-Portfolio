import { Variants } from "framer-motion";

export const textVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: -20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.7,
      delay: 0.2,
    },
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.7,
      delay: 0.2,
    },
  },
};
