import styles from "./ContactBtns.module.scss";
import { motion } from "framer-motion";

const ContactBtns = () => {
  return (
    <motion.div
      className={styles.btns_container}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className={styles.btn}>
        <a href="mailto:arsenyper@gmail.com">Write Email</a>
      </div>
      <div className={styles.btn}>
        <a href="/files/Arsenii_Perevertailo_CV.pdf" target="_blank" rel="noreferrer">
          Download CV
        </a>
      </div>
    </motion.div>
  );
};

export default ContactBtns;
