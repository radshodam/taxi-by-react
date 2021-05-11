import React from "react";
import styles from "./whytaxi.module.css";
import headimg from "../../../images/boss.png";

const names = [
  {
    name: "دلیل اول",
    desceiption:
      " هرگونه مشکل در هنگام مسولیت داخلی بود با این شماره تماس بگیریدهرگونه مشکل در هنگام مسولیت داخلی بود با این شماره تماس بگیرید",
  },
  {
    name: "دلیل دوم",
    desceiption:
      " هرگونه مشکل در هنگام مسولیت داخلی بود با این شماره تماس بگیریدهرگونه مشکل در هنگام مسولیت داخلی بود با این شماره تماس بگیرید",
  },
  {
    name: "دلیل سوم",
    desceiption:
      "هرگونه مشکل در هنگام مسولیت داخلی بود با این شماره تماس بگیرید",
  },
  {
    name: "دلیل چهارم",
    desceiption:
      "هرگونه مشکل در هنگام مسولیت داخلی بود با این شماره تماس بگیرید",
  },
  {
    name: "دلیل پنجم",
    desceiption:
      " هرگونه مشکل در هنگام مسولیت داخلی بود با این شماره تماس بگیریدهرگونه مشکل در هنگام مسولیت داخلی بود با این شماره تماس بگیرید",
  },
  {
    name: "دلیل ششم",
    desceiption:
      " هرگونه مشکل در هنگام مسولیت داخلی بود با این شماره تماس بگیریدهرگونه مشکل در هنگام مسولیت داخلی بود با این شماره تماس بگیرید",
  },
  {
    name: "دلیل هفتم",
    desceiption:
      "هرگونه مشکل در هنگام مسولیت داخلی بود با این شماره تماس بگیرید",
  },
  {
    name: "دلیل هشتم",
    desceiption:
      "هرگونه مشکل در هنگام مسولیت داخلی بود با این شماره تماس بگیرید",
  },
];
const WhyTaxi = () => {
  return (
    <div>
      <>
        <img src={headimg} alt="why" />
        <h3 className={styles.text_head}>
          یه نگاهی بندازیم ببینیم واقعا چرا باید لایکسی رو انتخاب کنیم؟
        </h3>
        <ul className={styles.cards}>
          {names.map((item) => {
            return (
              <li key={item.id} className={styles.itemcards}>
                <div className={styles.cardsTitle}>{item.name}</div>
                <div className={styles.cardsPrice}> {item.desceiption}</div>
              </li>
            );
          })}
        </ul>
      </>
    </div>
  );
};

export default WhyTaxi;
