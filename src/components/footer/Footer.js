import etemad from "../images/etemad.png";
import React from "react";
import styles from "./footer.module.css";
import DetailsFooter from "./details/DetailsFooter";

const names = [
  {
    name: "یک",
    address: "بجنورد خیابان هفده شهریور ...",
    call: "۰۵۸۵۲",
    mobile: "۰۹۳۶۶۳۸",
   
  },
  {
    name: "یک",
    address: "بجنورد خیابان هفده شهریور ...",
    call: "۰۵۸۵۲",
    mobile: "۰۹۳۶۶۳۸",
   
  },
  {
    name: "یک",
    address: "بجنورد خیابان هفده شهریور ...",
    call: "۰۵۸۵۲",
    mobile: "۰۹۳۶۶۳۸",
   
  },
 

];
const Footer = () => {
  return (
    <div>
      <>
        <ul className={styles.cards}>
          <img src={etemad} alt="#" className={styles.w200} />
          {names.map((item) => {
            return (
              <DetailsFooter key={item.id}  {...item}/>
                  
            );
          })}
        </ul>
      </>
    </div>
  );
};

export default Footer;
