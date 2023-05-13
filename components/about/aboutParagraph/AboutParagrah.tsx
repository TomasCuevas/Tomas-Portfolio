import { motion } from "framer-motion";

//* animation variants *//
import { textAnimation } from "./aboutParagraph.animations";

//* interface *//
interface Props {
  paragraph: string;
}

export const AboutParagraph: React.FC<Props> = ({ paragraph }) => {
  return (
    <motion.p
      initial="offscreen"
      whileInView="onscreen"
      variants={textAnimation}
      viewport={{ once: true, amount: 0.4 }}
      className="text-lg font-extralight tracking-[1px] text-white sm:text-xl lg:text-2xl"
    >
      {paragraph}
    </motion.p>
  );
};
