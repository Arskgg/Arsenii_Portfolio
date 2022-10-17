import Link from "next/link";
import styles from "./ButtonLink.module.scss";

const ButtonLink = ({ href, text, page, ...props }) => {
  return (
    <div className={styles.btn}>
      {page ? (
        <Link href={page}>{text}</Link>
      ) : (
        <a href={href} {...props}>
          {text}
        </a>
      )}
    </div>
  );
};

export default ButtonLink;
