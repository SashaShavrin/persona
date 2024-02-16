import styles from "./styles/styles.module.css";
import { AiOutlineClose } from "react-icons/ai";

export const MiniHeader = ({ setMiniHeader, showMiniHeader }) => {
  return (
    showMiniHeader && (
      <div className={styles.header_mini}>
        <div className={styles.inner_mini}>
          <div className={styles.info}>
            Стройте продукты будущего с платформой мэтчинга Persona
          </div>
          <div className={styles.close} onClick={() => setMiniHeader(false)}>
            <AiOutlineClose style={{ color: "black", cursor: 'pointer' }} />
          </div>
        </div>
      </div>
    )
  );
};
