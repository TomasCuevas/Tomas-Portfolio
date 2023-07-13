import { Variants } from "framer-motion";

export const articleVariants: Variants = {
  offscreen: { opacity: 0, x: -150 },
  onscreen: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

export const imageMobileVariants: Variants = {
  offscreen: { opacity: 0.1 },
  onscreen: { opacity: 0.25 },
};

export const titleVariants: Variants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { opacity: 1, y: 0 },
};

export const descriptionVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    transition: { duration: 0.5 },
    opacity: 1,
  },
};
