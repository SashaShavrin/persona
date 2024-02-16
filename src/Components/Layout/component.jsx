import styles from "./styles/styles.module.css";

export const Layout = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};
