import { Avatar } from "../Avatar/.component";
import { Cases } from "../Cases/component";
import { Layout } from "../Layout/component";
import styles from "./styles/styles.module.css";
import { RiDoubleQuotesL } from "react-icons/ri";

const data = {
  comment:
    "Чей то комментарий касаемо контента в посте, фраза на две или 3 строки с подписью автора",
  author: "Василий Петрович, глава СХО проекта",
  avatar: "/img/fon.png",
  title: "Баст",
  direction: "ECCOMMERCE",
  header: "Чиать этот класный кейс полностью",
  description:
    "Небольшое но емкое описание того что содержиться в посте, другими словами важная мысль и пользовапоста",
  background: "/img/fon.png",
  backgroundColor: "#9f2e70",
};

export const ContentCase = () => {
  return (
    <div className={styles.page}>
      <div
        className={styles.content}
        style={{
          background: `linear-gradient(270deg, ${
            data.backgroundColor
          } 60%,  ${"black"} 100%)`,
        }}
      >
        <div className={styles.left}>
          <div className={styles.comment}>
            <RiDoubleQuotesL /> {data.comment}
          </div>
          <div className={styles.author}>- {data.author}</div>

          <div className={styles.direction}>{data.direction}</div>
          <div className={styles.header}>{data.header}</div>
          <div className={styles.description}>{data.description}</div>
        </div>

        <div className={styles.right}>
          <div className={styles.info}>
            <Avatar image={data.avatar} />
            <div>{data.title}</div>
          </div>

          <div className={styles.image} />
        </div>
      </div>

      <div className={styles.similar}>Читать так же</div>
      <Layout>
        <Cases />
      </Layout>
    </div>
  );
};
