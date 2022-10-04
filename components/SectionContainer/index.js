import Divider from "../Divider";
import styles from "./SectionContainer.module.scss";

const SectionContainer = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <Divider className={`${styles.divider} ${styles.top_divider}`} />
      <div className={styles.title}>{title}</div>
      <Divider className={`${styles.divider} ${styles.middle_divider}`} />
      <div className={styles.content_slider_container}>{children}</div>
      <Divider className={`${styles.divider} ${styles.bottom_divider}`} />
    </div>
  );
};
export default SectionContainer;
