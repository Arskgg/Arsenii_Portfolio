import styles from "./ContactBtns.module.scss";
import { motion } from "framer-motion";
import ButtonLink from "../ButtonLink";

const ContactBtns = () => {
  return (
    <motion.div
      className={styles.btns_container}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <ButtonLink href="mailto:arsenyper@gmail.com" text="Write Email" />

      <ButtonLink
        href="/files/Arsenii_Perevertailo_CV.pdf"
        target="_blank"
        rel="noreferrer"
        text="Download CV"
      />
    </motion.div>
  );
};

export default ContactBtns;
