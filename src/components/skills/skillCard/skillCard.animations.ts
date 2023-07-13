import { Variants } from "framer-motion";

export const carVariants: Variants = {
  onscreen: {
    scale: 1,
    rotate: 0,
    transition: { duration: 0.3, delay: 0.1 },
  },
  hover: {
    scale: 1.08,
    rotate: [2, 1, 0, -2, 0],
    transition: { duration: 0.3, delay: 0.1 },
  },
};
