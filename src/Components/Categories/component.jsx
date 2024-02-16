import styles from "./styles/styles.module.css";
import { Categorie } from "../Categorie/component";

export const Categories = ({ selectCategories }) => {
  const items = [
    {
      name: "Mobile App",
      type: "command",
      visible: selectCategories === "command",
      image: "manager",
    },
    {
      name: "Web App",
      type: "command",
      visible: selectCategories === "command",
      image: "manager",
    },
    {
      name: "Data Science",
      type: "command",
      visible: selectCategories === "command",
      image: "manager",
    },
    {
      name: "Gen AI Feature",
      type: "command",
      visible: selectCategories === "command",
      image: "manager",
    },
    {
      name: "Rapid Prototype",
      type: "command",
      visible: selectCategories === "command",
      image: "manager",
    },
    {
      name: "Marketing Website",
      type: "command",
      visible: selectCategories === "command",
      image: "manager",
    },
    {
      name: "Technology Migration",
      type: "command",
      visible: selectCategories === "command",
      image: "manager",
    },
    {
      name: "System Architecture",
      type: "command",
      visible: selectCategories === "command",
      image: "manager",
    },

    {
      name: "Front End Developer",
      type: "specialist",
      visible: selectCategories === "specialist",
      image: "frontend",
    },
    {
      name: "Product Manager",
      type: "specialist",
      visible: selectCategories === "specialist",
      image: "manager",
    },
    {
      name: "Product Designer",
      type: "specialist",
      visible: selectCategories === "specialist",
      image: "product",
    },
    {
      name: "Data Scientist",
      type: "specialist",
      visible: selectCategories === "specialist",
      image: "data",
    },
    {
      name: "Growth Marketer",
      type: "specialist",
      visible: selectCategories === "specialist",
      image: "marketing",
    },
    {
      name: "AI Expert",
      type: "specialist",
      visible: selectCategories === "specialist",
      image: "ai",
    },
    {
      name: "Back End Developer",
      type: "specialist",
      visible: selectCategories === "specialist",
      image: "backend",
    },
    {
      name: "CXO",
      type: "specialist",
      visible: selectCategories === "specialist",
      image: "CXO",
    },
  ];

  return (
    <div className={styles.items}>
      {items
        .filter((item) => item.visible)
        .map((item) => {
          return <Categorie key={item.name} categorie={item} styles={styles} />;
        })}
    </div>
  );
};
