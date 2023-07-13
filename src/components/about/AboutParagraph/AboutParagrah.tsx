import { motion } from "framer-motion";

//* ANIMATION VARIANTS *//
import { textVariants } from "./aboutParagraph.animations";

//* INTERFACE *//
interface Props {
  paragraph: string;
}

export const AboutParagraph: React.FC<Props> = ({ paragraph }) => {
  return (
    <motion.p
      initial="offscreen"
      whileInView="onscreen"
      variants={textVariants}
      viewport={{ once: true, amount: 0.4 }}
      className="text-lg font-light tracking-[1px] text-white sm:text-xl lg:text-2xl"
    >
      {paragraph}
    </motion.p>
  );
};
