import { motion, Variants } from "framer-motion";

//* animation variants *//
const borderAnimation: Variants = {
  offscreen: { opacity: 0, x: -200 },
  onscreen: { opacity: 1, x: 0 },
};

//* interface *//
interface Props {
  title: string;
}

export const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <>
      <div className="mb-4">
        <h2 className="text-5xl tracking-[1px] text-light xs:text-6xl">
          {title}
        </h2>
      </div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={borderAnimation}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mb-4 h-[2px] w-full bg-light"
      ></motion.div>
    </>
  );
};
