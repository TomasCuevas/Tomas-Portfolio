import { Variants } from "framer-motion";

export const textVariants: Variants = {
  offscreen: { opacity: 0 },
  onscreen: { opacity: 1, transition: { delay: 0.6, duration: 1 } },
};
