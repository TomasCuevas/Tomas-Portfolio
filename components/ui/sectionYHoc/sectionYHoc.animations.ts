import { Variants } from "framer-motion";

export const sectionAnimation: Variants = {
  offscreen: { opacity: 0, y: -100 },
  onscreen: { opacity: 1, y: 0 },
};
