import React from "react";
import styles from "./modal.module.css";
const Modal = ({ show, details, onClose ,children }) => {
  return (
    <div onClick={children}>
      {show ? (
        <div className={styles.modalWrapper}>
          <div className={styles.modalItem}>
            <div className={styles.row}>
              <div className={styles.title}>
                {details.title}
              </div>
              <div className={styles.price}>{details.name} {details.lastName}</div>
            </div>
            <div>
              <img src={details.src} alt={details.alt} />
            </div>

            <div className={styles}>
            مسئولیت:  {details.desceiption}
            </div>
            <button className={styles.button} onClick={onClose}>
              بستن
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
