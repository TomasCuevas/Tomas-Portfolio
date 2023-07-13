import { motion } from "framer-motion";

//* ANIMATION VARIANTS *//
import { carVariants } from "./skillCard.animations";

//* INTERFACE *//
interface Props {
  img: string;
  name: string;
}

export const SkillCard: React.FC<Props> = ({ img, name }) => {
  return (
    <motion.div
      animate="onscreen"
      whileHover="hover"
      variants={carVariants}
      className="mx-auto flex w-full flex-col items-center justify-center gap-2 rounded-lg bg-light/20 p-2"
    >
      <img
        src={img}
        alt={`${name} logo`}
        className="md-w-16 h-16 w-16 object-contain sm:h-20 sm:w-20 md:h-16"
      />
      <h4 className="text-center font-light text-white sm:text-lg">{name}</h4>
    </motion.div>
  );
};
