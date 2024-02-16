import { Drawer } from "antd";
import { useState } from "react";

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import styles from "./styles/styles.module.css";
import classNames from "classnames";

export const Menu = ({ selectsItems }) => {
  const [activSelectItem, setActiveSelectItem] = useState(null);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  console.log("activSelectItem", activSelectItem);

  return (
    <>
      <div onClick={showDrawer} className={styles.menu}>
        <HiOutlineMenuAlt2 color="black" />
      </div>

      <Drawer
        onClose={onClose}
        open={open}
        title="Меню"
        className={styles.drawer}
        // closable={false}
        placement="left"
        width={activSelectItem !== null ? "100vw" : "350px"}
      >
        {selectsItems.map((item) => {
          return (
            <div key={item.key}>
              <div
                className={styles.item_title}
                onClick={() => setActiveSelectItem(item.key)}
              >
                {item.label}
              </div>

              {item.key === activSelectItem && (
                <div className={classNames(styles.select_active)}>
                  {selectsItems[activSelectItem]?.items.map((card) => {
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
            </div>
          );
        })}
      </Drawer>
    </>
  );
};
