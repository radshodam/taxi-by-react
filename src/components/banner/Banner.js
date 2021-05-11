import React from "react";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styles.root} id="app">
      <div >
        <h4>همین حالا اپلیکیشن لایکسی رو دانلود کن</h4>
      </div>
      <div className={styles.appDl}>
      
        <a className={styles.appbox1} href="??">
        </a>
        <a className={styles.appbox2} href="??">
        </a>
      </div>
    </div>
  );
};

export default Banner;
