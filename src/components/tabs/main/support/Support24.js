import React from "react";
import styles from "./support.module.css";
import headimg from "../../../images/boss.png";
const Support = () => {
  return (
    <div>
      <>
        <img src={headimg} alt="why" />
        <h3 className={styles.text_head}>پشتیبانی ۲۴ ساعته در شبانه روز </h3>
        <p className={styles.paragraph}>
          لایکسی بصورت شبانه روزی از طریق اپلیکیشن و یا تماس با شماره اختصاصی
          ۳۱۶۰-۰۵۸ آماده سرویس دهی و پشتیبانی به شما مسافرین عزیز می باشد
          .لایکسی بصورت شبانه روزی از طریق اپلیکیشن و یا تماس با شماره اختصاصی
          ۳۱۶۰-۰۵۸ آماده سرویس دهی و پشتیبانی به شما مسافرین عزیز می باشد .
        </p>
      </>
    </div>
  );
};

export default Support;
