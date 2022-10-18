import styles from "./NavBar.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AnimatedTitle from "../AnimatedTitle";
import ThemeSwitch from "../ThemeSwitch";
import Link from "next/link";
import { motion } from "framer-motion";

const NavBar = ({ scrollOnClickMenueItem, project, sectionRefs }) => {
  const menuItems = ["Home", "Projects", "About"];

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/">
          <a>
            <AnimatedTitle
              className={styles.name}
              text="ARSENII PEREVERTAILO"
              onClick={() =>
                !project && scrollOnClickMenueItem(sectionRefs[0], 0)
              }
            />
          </a>
        </Link>

        <menu className={styles.menu}>
          <motion.ul
            className={styles.list}
            initial={{ opacity: 0, x: "100px" }}
            animate={{ opacity: 1, x: "0px" }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
          >
            {project ? (
              <li key={project} className={styles.item_project}>
                {project}
              </li>
            ) : (
              menuItems.map((item, i) => (
                <li
                  value={i}
                  key={item}
                  className={styles.item}
                  onClick={() => scrollOnClickMenueItem(sectionRefs[i], i)}
                >
                  {item}
                </li>
              ))
            )}
            <div className={styles.icons_container}>
              <li className={styles.item_icon}>
                <a
                  href="https://github.com/Arskgg"
                  target="_blank"
                  rel="noreferrer"
                >
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
              <li>
                <ThemeSwitch />
              </li>
            </div>
          </motion.ul>
        </menu>
      </div>
    </nav>
  );
};

export default NavBar;
