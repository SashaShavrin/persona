import styles from "./styles/styles.module.css";
import { CaseItem } from "../CaseItem/component,";

export const Cases = () => {
  const generateId = "id" + Math.random(0).toString(16).slice(2);

  const cases = [
    {
      id: generateId + 5,
      avatar: "./img/fon.png",

      title: "Баст",
      direction: "ECCOMMERCE",
      header: "Чиать этот класный кейс полностью",
      description:
        "Небольшое но емкое описание того что содержиться в посте, другими словами важная мысль и пользовапоста",
      background: "../../../../public/img/fon.png",
      backgroundColor: "#6f2e70",
    },

    {
      id: generateId + 4,
      avatar: "./img/fon.png",

      title: "Баст",
      direction: "ECCOMMERCE",
      header: "Чиать этот класный кейс полностью",
      description:
        "Небольшое но емкое описание того что содержиться в посте, другими словами важная мысль и пользовапоста",
      background: "../../../../public/img/fon.png",
      backgroundColor: "#6f2e70",
    },

    {
      id: generateId + 3,
      avatar: "./img/fon.png",

      title: "Баст",
      direction: "ECCOMMERCE",
      header: "Чиать этот класный кейс полностью",
      description:
        "Небольшое но емкое описание того что содержиться в посте, другими словами важная мысль и пользовапоста",
      background: "../../../../public/img/fon.png",
      backgroundColor: "#6f2e70",
    },

    {
      id: generateId + 2,
      avatar: "./img/fon.png",

      title: "Баст",
      direction: "ECCOMMERCE",
      header: "Чиать этот класный кейс полностью",
      description:
        "Небольшое но емкое описание того что содержиться в посте, другими словами важная мысль и пользовапоста",
      background: "../../../../public/img/fon.png",
      backgroundColor: "#6f2e70",
    },

    {
      id: generateId + 1,
      avatar: "./img/fon.png",
      title: "Баст",
      direction: "ECCOMMERCE",
      header: "Чиать этот класный кейс полностью",
      description:
        "Небольшое но емкое описание того что содержиться в посте, другими словами важная мысль и пользовапоста",
      background: "url(../../../../public/img/fon.png)",
      backgroundColor: "#6f2e70",
    },

    {
      id: generateId + 0,
      avatar: "./img/fon.png",
      title: "Баст",
      direction: "ECCOMMERCE",
      header: "Чиать этот класный кейс полностью",
      description:
        "Небольшое но емкое описание того что содержиться в посте, другими словами важная мысль и пользовапоста",
      background: "../../../../public/img/fon.png",
      backgroundColor: "#9f2e70",
    },
  ];

  return (
    <div className={styles.cases}>
      {cases.map((itemCase) => {
        return (
          <CaseItem styles={styles} key={itemCase.id} itemCase={itemCase} />
        );
      })}
    </div>
  );
};
