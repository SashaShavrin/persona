import styles from "./styles/styles.module.css";
import { useEffect, useRef, useState } from "react";
import { FilterCase } from "../FilterCase/component";

// const cases = [
//   {
//     title: "Индустрия",
//     key: 0,
//     items: [
//       {
//         label: "1st menu item",
//         key: 1,
//       },
//       {
//         label: "2nd menu item",
//         key: 2,
//       },
//       {
//         label: "3rd menu item",
//         key: 3,
//       },
//     ],
//   },

//   {
//     title: "Решения",
//     key: 1,
//     items: [
//       {
//         label: "4st menu item",
//         key: 1,
//       },
//       {
//         label: "5nd menu item",
//         key: 2,
//       },
//       {
//         label: "6rd menu item",
//         key: 3,
//       },
//     ],
//   },

//   {
//     key: 2,
//     title: "Этапы",
//     items: [
//       {
//         label: "7st menu item",
//         key: 1,
//       },
//       {
//         label: "8nd menu item",
//         key: 2,
//       },
//       {
//         label: "9rd menu item",
//         key: 3,
//       },
//     ],
//   },

//   {
//     title: "Решения",
//     key: 3,
//     items: [
//       {
//         label: "10st menu item",
//         key: 1,
//       },
//       {
//         label: "11nd menu item",
//         key: 2,
//       },
//       {
//         label: "12rd menu item",
//         key: 3,
//       },
//     ],
//   },
// ];

const cases = [
  {
    title: "Индустрия",
    key: 0,
    items: ["1st menu item", "2nd menu item", "3rd menu item"],
  },

  {
    title: "Решения",
    key: 1,
    items: ["4st menu item", "5nd menu item", "6rd menu item"],
  },

  {
    key: 2,
    title: "Этапы",
    items: ["7st menu item", "8nd menu item", "9rd menu item"],
  },

  {
    title: "Решения",
    key: 3,
    items: ["10st menu item", "11nd menu item", "12rd menu item"],
  },
];

export const FilterCases = () => {
  const [selectedFilter, setSelectedFilter] = useState([]);
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
    <div className={styles.cases} ref={modalEl}>
      {cases.map((item) => {
        return (
          <div onClick={() => setActiveSelectItem(item.key)}>
            <FilterCase
              key={item.key}
              styles={styles}
              item={item}
              currentSelectItem={cases[activSelectItem]}
              activSelectItem={activSelectItem}
              setSelectedFilter={setSelectedFilter}
              selectedFilter={selectedFilter}
            />
          </div>
        );
      })}
    </div>
  );
};
