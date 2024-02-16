import SliderFor from "../SliderFor/component";
import styles from "./styles/styles.module.css";

const items = [
  { count: "200+", text: "команд" },
  { count: "1000+", text: "СХО (СТО, СРО, СМО)" },
  { count: "100к +", text: "middle, senior специалистов" },
];

export const Feature = () => {
  return (
    <div className={styles.sliders}>
      <div className={styles.items}>
        {items.map((item, index) => {
          return (
            <div className={styles.item} key={index}>
              <div className={styles.count}>{item.count}</div>
              <div className={styles.item_text}>{item.text}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.for}>
        <SliderFor />
      </div>
    </div>
  );
};
