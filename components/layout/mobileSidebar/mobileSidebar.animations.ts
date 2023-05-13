import { Variants } from "framer-motion";

export const asideAnimation: Variants = {
  offscreen: { opacity: 0 },
  onscreen: { opacity: 1, transition: { duration: 0.3 } },
};

export const contactAnimation: Variants = {
  offscreen: { opacity: 0, y: -10 },
  onscreen: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
};

export const textAnimation: Variants = {
  offscreen: { opacity: 0, y: 20 },
  onscreen: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
};

export const borderAnimation: Variants = {
  offscreen: { opacity: 0, x: -100 },
  onscreen: { opacity: 1, x: 0 },
};
