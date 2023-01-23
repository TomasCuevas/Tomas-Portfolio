import { motion, Variants } from "framer-motion";

//* animation variants *//
const carAnimations: Variants = {
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

//* interface *//
interface Props {
  img: string;
  name: string;
}

export const SkillCard: React.FC<Props> = ({ img, name }) => {
  return (
    <motion.div
      animate="onscreen"
      whileHover="hover"
      variants={carAnimations}
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
