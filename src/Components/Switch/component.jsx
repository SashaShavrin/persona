import styles from "./styles/styles.module.css";
import classNames from "classnames";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdEmojiPeople } from "react-icons/md";

export const Switch = ({ setSelectCategories, selectCategories }) => {
  const onClickCategories = (type) => {
    if (type === "command") {
      setSelectCategories("command");
    } else {
      setSelectCategories("specialist");
    }
  };

  return (
    <div className={styles.switch_container}>
      <div
        id="command"
        onClick={() => onClickCategories("command")}
        className={classNames(
          styles.button,
          selectCategories === "command" && styles.active
        )}
      >
        Команда <FaPeopleGroup className={styles.icon} />
      </div>

      <div
        id="specialist"
        className={classNames(
          styles.button,
          selectCategories === "specialist" && styles.active
        )}
        onClick={() => onClickCategories("specialist")}
      >
        Специалисты <MdEmojiPeople className={styles.icon} />
      </div>
    </div>
  );
};
