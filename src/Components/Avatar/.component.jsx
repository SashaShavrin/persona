import styles from "./styles/styles.module.css";

export const Avatar = ({ image }) => {
  return <img className={styles.avatar} src={`${image}`} alt="avatar" />;
};
