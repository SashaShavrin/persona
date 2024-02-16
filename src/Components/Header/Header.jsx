import styles from "./styles/styles.module.css";
import { CiUser } from "react-icons/ci";
import { SelectHeader } from "../SelectHeader/component";
import { LocationCountry } from "../LocationCountry/component";
import { AiFillBehanceCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { Menu } from "../Menu/component";

export const Header = ({ children, showMiniHeader }) => {
  const selectsItems = [
    {
      key: 0,
      label: "Таланты",
      items: [
        {
          image: <AiFillBehanceCircle />,
          title: "1Lorem Title",
          text: "Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах",
        },
        {
          image: <AiFillBehanceCircle />,
          title: "1Lorem Title",
          text: "Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах",
        },
        {
          image: <AiFillBehanceCircle />,
          title: "1Lorem Title",
          text: "Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах",
        },
        {
          image: <AiFillBehanceCircle />,
          title: "1Lorem Title",
          text: "Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах",
        },
      ],
    },
    {
      key: 1,
      label: "Компании",
      items: [
        {
          image: <AiFillBehanceCircle />,
          title: "2Lorem Title",
          text: "Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах",
        },
        {
          image: <AiFillBehanceCircle />,
          title: "2Lorem Title",
          text: "Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах",
        },
        {
          image: <AiFillBehanceCircle />,
          title: "2Lorem Title",
          text: "Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах",
        },
        {
          image: <AiFillBehanceCircle />,
          title: "2Lorem Title",
          text: "Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах",
        },
      ],
    },

    {
      key: 2,
      label: "Кейсы студий",
      items: [
        {
          image: <AiFillBehanceCircle />,
          title: "Lorem Title",
          text: "Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах",
        },
        {
          image: <AiFillBehanceCircle />,
          title: "Lorem Title",
          text: "Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах",
        },
        {
          image: <AiFillBehanceCircle />,
          title: "Lorem Title",
          text: "Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах",
        },
        {
          image: <AiFillBehanceCircle />,
          title: "Lorem Title",
          text: "Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах",
        },
      ],
    },

    {
      key: 3,
      label: "О нас",
      items: [
        {
          image: <AiFillBehanceCircle />,
          title: "Lorem Title",
          text: "Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах",
        },
        {
          image: <AiFillBehanceCircle />,
          title: "Lorem Title",
          text: "Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах",
        },
        {
          image: <AiFillBehanceCircle />,
          title: "Lorem Title",
          text: "Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах",
        },
        {
          image: <AiFillBehanceCircle />,
          title: "Lorem Title",
          text: "Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах",
        },
      ],
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  console.log(scrolled)

  return (
    <div
      className={classNames(styles.header, scrolled && styles.header_scrolled)}
    >
      {children}
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.logo}>Persona</div>
          <SelectHeader
            styles={styles}
            showMiniHeader={showMiniHeader}
            selectsItems={selectsItems}
            scrolled={scrolled}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.enter}>
            <CiUser />
            <span>Вход</span>
          </div>
          <LocationCountry styles={styles} />
          <Menu selectsItems={selectsItems} />
        </div>
      </div>
    </div>
  );
};
