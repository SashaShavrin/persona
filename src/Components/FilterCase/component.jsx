import classNames from "classnames";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Button, Checkbox } from "antd";
import { ButtonComponent } from "../Button/component";
import { MdClear } from "react-icons/md";
import { MdFilterAltOff } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const CheckboxGroup = Checkbox.Group;

export const FilterCase = ({
  styles,
  item,
  currentSelectItem,
  activSelectItem,
  setSelectedFilter,
  selectedFilter,
}) => {
  const [showItems, setShowItems] = useState();
  const [checkedList, setCheckedList] = useState([]);

  useEffect(() => {
    if (item.key !== activSelectItem) {
      setShowItems(false);
    }
  }, [activSelectItem, item.key]);

  const onCheckAllChange = (e) => {
    setCheckedList(e ? currentSelectItem.items : []);
  };

  const onChange = (list) => {
    setCheckedList(list);
    setSelectedFilter([...selectedFilter, list]);
  };

  return (
    <>
      <div
        className={classNames(
          styles.item,
          item.key === activSelectItem && styles.active
        )}
        onClick={() => setShowItems(!showItems)}
      >
        <span>{item.title}</span>
        <IoIosArrowDown
          className={classNames(
            styles.icon,
            !showItems && styles.icon_collapse
          )}
        />
      </div>

      {showItems && item.key === activSelectItem && (
        <div className={classNames(styles.select_active)}>
          <CheckboxGroup
            options={currentSelectItem.items}
            value={checkedList}
            onChange={onChange}
            style={{ fontSize: "1rem !important" }}
            className={styles.group_checkbox}
          />

          <div className={styles.clear}>
            <ButtonComponent
              text="сбросить фильтр"
              icon={<MdFilterAltOff />}
              onClick={() => {
                onCheckAllChange(false);
              }}
            />
            <Button
              className={styles.close}
              icon={<MdClear />}
              onClick={() => {
                setShowItems(!showItems);
              }}
            />
          </div>
        </div>
      )}

      {checkedList?.length > 0 && (
        <div className={styles.selected_items}>
          {checkedList.map((item) => {
            return (
              <div key={item} className={styles.selected_item}>
                <div>{item} </div>
                <div className={styles.selected_close}>
                  <AiOutlineClose
                    onClick={() => {
                      const filter = checkedList.filter(
                        (checkedItem) => checkedItem !== item
                      );

                      setCheckedList(filter);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
