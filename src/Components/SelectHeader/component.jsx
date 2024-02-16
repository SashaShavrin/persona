import { useEffect, useRef, useState } from "react";
import { ItemHeaderSelectBox } from "../ItemHeaderSelectBox/component";

export const SelectHeader = ({
  styles,
  showMiniHeader,
  selectsItems,
  scrolled,
}) => {
  const [activSelectItem, setActiveSelectItem] = useState();

  const modalEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!modalEl.current) {
        return;
      }
      if (!modalEl.current.contains(event.target)) {
        setActiveSelectItem();
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div className={styles.items} ref={modalEl}>
      {selectsItems.map((item) => {
        return (
          <div onClick={() => setActiveSelectItem(item.key)}>
            <ItemHeaderSelectBox
              key={item.key}
              styles={styles}
              item={item}
              currentSelectItem={selectsItems[activSelectItem]}
              activSelectItem={activSelectItem}
              showMiniHeader={showMiniHeader}
              scrolled={scrolled}
            />
          </div>
        );
      })}
    </div>
  );
};
