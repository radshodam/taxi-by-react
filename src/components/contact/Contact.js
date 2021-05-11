import React from "react";
import styles from "./contact.module.css";
import Items from "./Items";
function Contact() {
  return (
    <div>
      <h3 className={styles.text_head}>ارتباط با ما</h3>
      <Items />
    </div>
  );
}

export default Contact;
