import { useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./About.module.scss";

const AboutItem = ({
  title,
  children,
  skills,
  reverseAnimation,
  education,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const inViewAnimationFormLeft = {
    transform: isInView ? "none" : "translateX(-400px)",
    opacity: isInView ? 1 : 0,
    transition: "all  1.5s ease-in-out",
  };

  const inViewAnimationFormRight = {
    transform: isInView ? "none" : "translateX(400px)",
    opacity: isInView ? 1 : 0,
    transition: "all  1.5s ease-in-out",
  };

  return (
    <div className={styles.slider_item}>
      <div ref={ref}
        className={styles.slider_item__title}
        style={
          reverseAnimation ? inViewAnimationFormRight : inViewAnimationFormLeft
        }
      >
        {title}
      </div>
      <div
        className={`${styles.slider_item__content} ${skills && styles.skills} ${
          education && styles.education
        }`}
        style={
          reverseAnimation ? inViewAnimationFormLeft : inViewAnimationFormRight
        }
      >
        {children}
      </div>
    </div>
  );
};

export default AboutItem;
