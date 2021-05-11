import pegah from "../images/adscity-1.png";
import React from "react";
import styles from "./advocate.module.css";

const names = [
  {
    name: "حامی اول",
    src: pegah,
  },
  {
    name: "حامی دوم",
    src: pegah,
  },
  {
    name: "حامی سوم",
    src: pegah,
  },
  {
    name: "حامی چارم",
    src: pegah,
  },
  {
    name: "حامی پنجم",
    src: pegah,
  },
  {
    name: "حامی ششم",
    src: pegah,
  },
  {
    name: "حامی هفتم",
    src: pegah,
  },
  {
    name: "حامی هشتم",
    src: pegah,
  },
  {
    name: "حامی نهم",
    src: pegah,
  },
  {
    name: "حامی دهم",
    src: pegah,
  },
];
const Advocate = () => {
  return (
    <div>
      <>
        <h3 className={styles.text_head} id="advorcate">حامیان ما </h3>
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

export default Advocate;
