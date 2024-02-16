import classNames from "classnames";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const ItemHeaderSelectBox = ({
  styles,
  item,
  currentSelectItem,
  activSelectItem,
  showMiniHeader,
  scrolled,
}) => {
  const [showItems, setShowItems] = useState();

  useEffect(() => {
    if (item.key !== activSelectItem) {
      setShowItems(false);
    }
  }, [activSelectItem, item.key]);

  return (
    <>
      <div
        className={classNames(
          styles.item,
          scrolled && styles.item_scrolled,
          item.key === activSelectItem && styles.active,
          scrolled && item.key === activSelectItem && styles.active_scrolled
        )}
        onClick={() => setShowItems(!showItems)}
      >
        <span>{item.label}</span>
        <IoIosArrowDown />
      </div>

      {showItems && item.key === activSelectItem && (
        <div
          className={classNames(
            styles.select_active,
            showMiniHeader && styles.select_active_top
          )}
        >
          {currentSelectItem?.items.map((card) => {
            return (
              <div className={styles.card}>
                <div className={styles.card_img}>{card.image}</div>
                <div className={styles.card_title}>{card.title}</div>
                <div className={styles.card_text}>{card.text}</div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
