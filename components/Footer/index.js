import styles from "./Footer.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Divider from "../Divider";
import ContactBtns from "../ContactBtns";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Divider className={styles.divider} />

      <ul className={styles.list}>
        <li className={styles.item_icon}>
          <a href="https://github.com/Arskgg" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
        </li>
        <li className={styles.item_icon}>
          <a
            href="https://www.facebook.com/arskgg/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
        </li>
        <li className={styles.item_icon}>
          <a
            href="https://www.linkedin.com/in/arskgg/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </li>
      </ul>
      <ContactBtns />
      <div className={styles.info}>
        ©{new Date().getFullYear()} Arsenii Perevertailo - All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
