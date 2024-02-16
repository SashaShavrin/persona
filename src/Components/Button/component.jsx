import styles from "./styles/styles.module.css";

export const ButtonComponent = ({ text, icon, onClick }) => {
  return (
    <div className={styles.button} onClick={onClick}>
      {text}
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};
