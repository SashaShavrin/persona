import classNames from "classnames";
import { useState } from "react";
import { FaRegSquareCheck } from "react-icons/fa6";
import { ImCheckboxUnchecked } from "react-icons/im";

export const Categorie = ({ categorie, styles }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className={classNames(styles.item, checked && styles.checked)}
      onClick={() => {
        setChecked(!checked);
      }}
    >
      <div className={styles.checkbox}>
        {checked ? <FaRegSquareCheck /> : <ImCheckboxUnchecked />}
      </div>
      {categorie.image && (
        <img src={`./img/${categorie.image}.svg`} alt="type" />
      )}
      <div>{categorie.name}</div>
    </div>
  );
};
