import { IoIosArrowDropdown } from "react-icons/io";
import styles from "./styles/styles.module.css";

export const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main_inner}>
        <div className={styles.frame}>
          <div className={styles.slogan}>
            Мэтч c{" "}
            <span style={{ background: "rgb(120 70 129)" }}>проверенными</span>{" "}
            специалистами и командами
          </div>
          <div className={styles.main_background}></div>
        </div>
        <div className={styles.sub_slogan}>
          Выбирай специалистов или целые команды с лучшим релевантным опытом ⚡
          <IoIosArrowDropdown className={styles.icon} />
        </div>
      </div>
    </div>
  );
};
