import { motion } from "framer-motion";

const AnimatedTitle = ({ text, delay = 0.05, fromDown, ...props }) => {
  const letterArr = text.split("");
  return (
    <div {...props}>
      {letterArr.map((letter, i) => (
        <motion.span
          style={{ display: letter !== " " ? "inline-block" : null }}
          key={letter + i}
          initial={{ opacity: 0, y: fromDown && 50 }}
          animate={{ opacity: 1, y: "0px" }}
          transition={{ delay: i * delay, ease: "easeInOut" }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedTitle;
