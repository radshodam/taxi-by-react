import React from "react";
import aboutimage from "../images/dar.png";
import styles from "./contact.module.css";
const Items = () => {
  return (
    <div className={styles.dflex} id="contact">
      <img src={aboutimage} alt="call" />

      <div className={styles.w750}>
        <h4>
          بجنورد ، فردوسی جنوبی ، فردوسی ۷ ، کوچه شهید استخری ، پلاک ۵۱ ، تماس
          جهت پیگیری شکایات ۰۵۸۳۲
        </h4>
        <h4>
          درباره شرکت : شرکت همراه جهان سوار بجنورد (با شماره ثبت ۵۷۳۲) و مجوز
          رسمی از سازمان تاکسی رانی متشکل از ۳۶ دفتر آژانس فعال با میانگین بیش
          از ۲۰ سال سابقه خدمت رسانی اینک در راستای ارائه خدمات بیشتر و آسانتر
          به هموطنان عزیز ، بستری آنلاین و بصورت کاملا امن و با کیفیت با برند
          لایکسی فراهم نموده است تا بتوان بیش از یپش در مسیر خدمتگذاری گامی بزرگ
          برداشته شود .
        </h4>
      </div>
    </div>
  );
};

export default Items;
