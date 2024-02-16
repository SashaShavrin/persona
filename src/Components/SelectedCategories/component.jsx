import { useState } from "react";
import { Switch } from "../Switch/component";
import { Categories } from "../Categories/component";
import { ButtonComponent } from "../Button/component";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import styles from "./styles/styles.module.css";

export const SelectedCategories = () => {
  const [selectCategories, setSelectCategories] = useState("command");

  return (
    <div className={styles.selected_categories}>
      <Switch
        setSelectCategories={setSelectCategories}
        selectCategories={selectCategories}
      />
      <Categories selectCategories={selectCategories} />
      <div className={styles.start}>
        <ButtonComponent text="начать" icon={<IoArrowForwardCircleOutline />} />
      </div>
    </div>
  );
};
