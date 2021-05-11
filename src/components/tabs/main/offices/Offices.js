import pegah from "../../../images/pegah.jpg";
import React from "react";
import styles from "./offices.module.css";

const names = [
  {
    name: "میراث",
    src: pegah,
  },
  {
    name: "پرستو",
    src: pegah,
  },
  {
    name: "آرزو",
    src: pegah,
  },
  {
    name: "شهاب",
    src: pegah,
  },
  {
    name: "پگاه",
    src: pegah,
  },
  {
    name: "میراث",
    src: pegah,
  },
  {
    name: "پرستو",
    src: pegah,
  },
  {
    name: "آرزو",
    src: pegah,
  },
  {
    name: "شهاب",
    src: pegah,
  },
  {
    name: "پگاه",
    src: pegah,
  },
];
const Office = () => {
  return (
    <div>
      <>
        <h3 className={styles.text_head}>دفاتر آژانس ما </h3>
        <ul className={styles.cards}>
          {names.map((item) => {
            return (
              <li key={item.id} className={styles.itemcards}>
                <div className={styles.pdd}>{item.name}</div>
                <img src={item.src} alt={item.title} className={styles.w200} />
                <div className={styles.bottomCards}></div>
              </li>
            );
          })}
        </ul>
      </>
    </div>
  );
};

export default Office;
