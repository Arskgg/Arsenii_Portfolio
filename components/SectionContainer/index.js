import Divider from "../Divider";
import styles from "./SectionContainer.module.scss";

const SectionContainer = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Divider className={`${styles.divider} ${styles.top_divider}`} />
        <div className={styles.title__name}>{title}</div>
        <Divider className={`${styles.divider} ${styles.middle_divider}`} />
      </div>
      <div className={styles.content_container}>{children}</div>
    </div>
  );
};
export default SectionContainer;
