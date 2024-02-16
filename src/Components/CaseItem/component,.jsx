import classNames from "classnames";
import { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import { Avatar } from "../Avatar/.component";

export const CaseItem = ({ styles, itemCase }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link to={`/case/${itemCase.id}`}>
      <div
        className={styles.case}
        onMouseMove={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div
          className={styles.case_image_wrapper}
          style={{ backgroundColor: itemCase.backgroundColor }}
        >
          <div
            className={styles.case_image}
            // нужно получить данные с сервера
            // style={{ backgroundImage: itemCase.fon }}
          />
        </div>

        <div className={styles.case_content}>
          {isHover ? (
            <div className={styles.case_hover}>
              <div className={styles.case_headers}>{itemCase.header}</div>
              <div className={styles.description}>{itemCase.description}</div>
              <div className={classNames(styles.case_read, styles.read_bottm)}>
                Читать <MdArrowRightAlt />
              </div>
            </div>
          ) : (
            <>
              <div className={styles.case_profile}>
                <Avatar image={itemCase.avatar} />

                <div className={styles.case_info}>
                  <div className={styles.case_title}>{itemCase.title}</div>
                  <div className={styles.case_direction}>
                    {itemCase.direction}
                  </div>
                </div>
              </div>

              <div className={styles.case_headers}>
                Чиать этот класный кейс полностью
              </div>
              <div className={styles.case_read}>
                Читать <MdArrowRightAlt />
              </div>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};
