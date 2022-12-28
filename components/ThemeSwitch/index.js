import styles from "./Switch.module.scss";
import LightModeIcon from "@mui/icons-material/LightMode";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import { useContext } from "react";
import { ThemeContext } from "../MainContainer";

const ThemeSwitch = ({ navBar }) => {
  const { darkTheme, changeTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    changeTheme();
  };

  return (
    <div>
      <label className={`${styles.switch} ${navBar && styles.switch_small}`}>
        <input
          type="checkbox"
          onChange={handleChangeTheme}
          checked={darkTheme}
        />

        <span className={`${styles.slider} ${styles.round}`}></span>
        {darkTheme ? (
          <Brightness3Icon
            className={styles.icon}
            sx={{ color: "var(--primary-color)" }}
          />
        ) : (
          <LightModeIcon
            className={styles.icon}
            sx={{ color: "var(--secondary-color)" }}
          />
        )}
      </label>
    </div>
  );
};

export default ThemeSwitch;
