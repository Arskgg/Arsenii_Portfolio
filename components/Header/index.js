import Image from "next/image";
import AnimatedTitle from "../AnimatedTitle";
import Divider from "../Divider";
import styles from "./Header.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../MainContainer";
import { images } from "../../assets/images";
import ContactBtns from "../ContactBtns";
import { motion } from "framer-motion";
const Header = ({ sectionRef }) => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <header ref={sectionRef} className={styles.header}>
      <div className={styles.container}>
        <Divider className={styles.top_divider} />
        <div className={styles.content}>
          <div className={styles.discription}>
            <div className={styles.title}>
              <h1>
                <AnimatedTitle text="Web" delay={0.1} fromDown />
                <br />
                <AnimatedTitle text="Developer" delay={0.1} fromDown />
              </h1>
            </div>

            <div className={styles.subtitle}>
              <h3>
                <AnimatedTitle
                  text=" Strategy and creativity is the foundation for effective results."
                  delay={0.01}
                  fromDown
                />
              </h3>
            </div>
            <div className={styles.btns}>
              <ContactBtns />
            </div>
          </div>
        </div>
        <Divider className={styles.bottom_divider} />
      </div>
      <motion.div
        className={styles.image_wrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8, ease: "easeIn" }}
      >
        <Image
          className={styles.background_img}
          src={darkTheme ? images.community_light : images.community_dark}
          alt="Web Community"
        />
      </motion.div>
    </header>
  );
};

export default Header;
