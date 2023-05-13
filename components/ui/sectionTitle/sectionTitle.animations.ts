import { Variants } from "framer-motion";

export const borderAnimation: Variants = {
  offscreen: { opacity: 0, x: -200 },
  onscreen: { opacity: 1, x: 0 },
};
