import { Variants } from "framer-motion";

export const articleVariants: Variants = {
  offscreen: { opacity: 0, x: -150 },
  onscreen: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

export const imageVariants: Variants = {
  offscreen: { opacity: 0.1 },
  onscreen: { opacity: 0.8 },
};

export const titleVariants: Variants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { opacity: 1, y: 0 },
};

export const descriptionVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: -20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
