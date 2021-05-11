import React from "react";
import styles from "./modal.module.css";
const Modal = ({ modal, menu }) => {
  return (
    <div className={[modal ? styles.wrapper : null].join(" ")}>
      {modal
        ? menu.map((n, index) => {
            return (
              <ul>
                <li key={index} >
                  <a href={n.href}>{n.name}</a>
                </li>
              </ul>
            );
          })
        : null}
    </div>
  );
};

export default Modal;
